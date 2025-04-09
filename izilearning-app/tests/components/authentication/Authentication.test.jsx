import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { BrowserRouter } from "react-router-dom";

import LoginForm from "../../../src/authentication/components/LoginForm";

const mock = new MockAdapter(axios);

const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Authentification", () => {
  beforeEach(() => {
    mock.reset();
  });

  test("renders login form", () => {
    renderWithRouter(<LoginForm />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("successful login", async () => {
    mock.onPost("/api/auth/login").reply(200, { token: "mock-token" });

    renderWithRouter(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await waitFor(() => expect(mock.history.post.length).toBe(1));

    // Optionally check navigation or success message
    // expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  test("shows error on failed login", async () => {
    mock.onPost("/api/auth/login").reply(401);

    renderWithRouter(<LoginForm />);

    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "wrong@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpass" },
    });
    fireEvent.click(screen.getByRole("button", { name: /login/i }));

    await screen.findByText(
      "Authentification : Request failed with status code 401"
    );
  });
});
