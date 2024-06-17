import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Profile() {
  const { isLoggedIn, changeLoginState } = useContext(LoginContext);
  const [like, setLike] = useState(false);

  return isLoggedIn ? (
    <div className="profile flex">
      <p>Welcome back!</p>
      <img
        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="user-profile"
        width="150px"
        height="150px"
        style={{ objectFit: "contain" }}
      />
      <button onClick={() => setLike(!like)}>
        {like ? "Liked ❤️" : "Like"}
      </button>
    </div>
  ) : (
    <div className="profile flex">
      <h2>Please login</h2>
      <button onClick={changeLoginState}>Login</button>
    </div>
  );
}
