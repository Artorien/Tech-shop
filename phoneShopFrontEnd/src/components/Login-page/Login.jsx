import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SpecialHeader from "../Common-components/SpecialHeader";
import { loginUser } from "../Services/Services";

function Login() {
  const navigate = useNavigate();
  const [isChecked, setIsCheked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCheck = (event) => {
    setIsCheked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isChecked) {
      try {
        const token = await loginUser(email, password);
        localStorage.setItem("token", token);
        navigate("/profile");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <SpecialHeader></SpecialHeader>

      <div className="loginForm">
        <div className="loginWrapper">
          <h1>Log In</h1>
          <form onSubmit={handleSubmit}>
            {error && <p id="error">{error}</p>}
            <input
              type="text"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(event) => setPassword(event.target.value)}
            />
            <div>
              <label htmlFor="checkBox">Agree to our terms</label>
              <input type="checkBox" name="checkBox" onChange={handleCheck} />
            </div>
            {!isChecked && <p id="notCheked">You must agree to our terms.</p>}
            <button type="submit" id="login" disabled={!isChecked}>
              Log In
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
