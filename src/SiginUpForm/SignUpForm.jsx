import { useState } from "react";
import "./SignUpForm.style.scss";

import {
  createAuthUserWithEmailAndPassword,
  creteUserDocumentFromAuth,
} from "../utils/Firebase/Firebase";
import FormInput from "../components/form-input/FormInput";
import Button from "../components/buttons/Button";

const defoultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};


function SignUpForm() {
  const [formFields, setFormField] = useState(defoultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  const resetForm = () => {
    setFormField(defoultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password do not match with Confirmpassword0");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await creteUserDocumentFromAuth(user, { displayName });
      resetForm();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sigin Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Consfirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
