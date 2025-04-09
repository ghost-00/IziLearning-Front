import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import UserContextProvider from "./user/context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <AppRoutes />
    </UserContextProvider>
  );
}

export default App;
