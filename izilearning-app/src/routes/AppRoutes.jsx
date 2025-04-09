import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Question from "../pages/Question";
import MainLayout from "../layouts/MainLayout";
import LoginForm from "../authentication/components/LoginForm";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/question" element={<Question />} />
        </Route>
      </Routes>
    </MainLayout>
  </Router>
);

export default AppRoutes;
