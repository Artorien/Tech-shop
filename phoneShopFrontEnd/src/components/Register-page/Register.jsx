import { useState } from "react";
import SpecialHeader from "../Common-components/SpecialHeader";
import { register } from "../Services/Services";
import { useNavigate } from "react-router-dom";

function Register() {
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
        const response = await register(email, password);
        alert(response);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div className="registerForm">
        <div className="registerWrapper">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            {error && <p id="error">{error}</p>}
            <input
              type="email"
              required
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <div>
              <label htmlFor="checkBox">Agree to our terms</label>
              <input type="checkBox" onChange={handleCheck} />
            </div>
            {!isChecked && <p id="notCheked">You must agree to our terms.</p>}
            <button type="submit" id="register" disabled={!isChecked}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
