import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

export default function Footer() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <p className="text-center">
      {isLoggedIn
        ? "Extraordinary things are always hiding in places people never think to look !"
        : "Login to see this message"}
    </p>
  );
}
