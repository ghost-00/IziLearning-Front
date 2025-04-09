import { useState, useEffect } from "react";
import useAuthentication from "../hooks/useAuthentication";

const LoginForm = () => {
  const { isLogged, error, isLoading, login } = useAuthentication();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
  };

  return (
    <>
      <>
        <h2>Login</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">email</label>
            <input
              id="email"
              name="email"
              type="text"
              className="form-control"
              placeholder="email"
              value={form.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password</label>
            <input
              id="password"
              name="password"
              type="text"
              className="form-control"
              placeholder="password"
              value={form.password}
              onChange={handleInputChange}
            />
          </div>

          <br />
          <button type="submit" className="btn btn-primary">
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </>
    </>
  );
};

export default LoginForm;
