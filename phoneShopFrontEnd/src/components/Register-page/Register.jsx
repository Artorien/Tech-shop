import { useState } from "react";
import SpecialHeader from "../Common-components/SpecialHeader";
import { register } from "../Services/Services";

function Register() {
  const [isChecked, setIsCheked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCheck = (event) => {
    setIsCheked(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isChecked) {
      await register();
    }
  };

  return (
    <>
      <SpecialHeader></SpecialHeader>
      <div className="registerForm">
        <div className="registerWrapper">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input type="email" required placeholder="Email" />
            <input type="password" required placeholder="Password" />
            <input type="passowrd" required placeholder="Password again" />
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
