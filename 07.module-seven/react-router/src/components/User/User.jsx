import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div>
      <h1>Userssss: {userId}</h1>
    </div>
  );
}
