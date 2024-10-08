import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function VerifyEmail() {
  const url = "http://localhost:8080/shop";
  const query = useQuery();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      const token = query.get("token");
      try {
        const response = await fetch(url + `/verify?token=${token}`);
        if (response.ok) {
          const messageText = await response.text();
          setMessage(messageText);
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        }
      } catch (error) {
        setMessage("Verification failed! Invalid or expired token.");
      }
    };

    verifyEmail();
  }, []);

  return (
    <div className="verification">
      <h2>Email Verification</h2>
      <p>{message}</p>
    </div>
  );
}

export default VerifyEmail;
