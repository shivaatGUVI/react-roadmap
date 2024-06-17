import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Navbar() {
  const { isLoggedIn, changeLoginState } = useContext(LoginContext);

  return (
    <div className="navbar flex">
      <div>{isLoggedIn ? <h1>Company's Logo</h1> : <h1>Company</h1>}</div>
      {isLoggedIn ? (
        <button onClick={changeLoginState}>Logout</button>
      ) : (
        <div className="btn-div flex">
          <button>Register</button>
          <p>|</p>
          <button onClick={changeLoginState}>Login</button>
        </div>
      )}
    </div>
  );
}
