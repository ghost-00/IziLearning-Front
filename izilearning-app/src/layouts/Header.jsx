import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../user/context/UserContext";
import Logout from "../pages/Logout";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/question">Question</Link>
          </li>

          {currentUser ? (
            <>
              <li>{currentUser.username} </li>
              <li>
                <Logout />
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
