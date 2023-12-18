import { useState, useContext } from "react";
import { UserContext } from "../../contexts/user.contexts";
import "./SignInForm.style.scss";

import {
  signInWithGooglePopup,
  creteUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase/Firebase";
import FormInput from "../form-input/FormInput";
import Button from "../buttons/Button";

const defoultFormFields = {
  email: "",
  password: "",
};

function SignInForm() {
  const [formFields, setFormField] = useState(defoultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    console.log(formFields);
    const { name, value } = e.target;
    setFormField({ ...formFields, [name]: value });
  };

  const { setCurrentUser } = useContext(UserContext);

  const resetForm = () => {
    setFormField(defoultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await creteUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);
      setCurrentUser(user);
      resetForm();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/invalid-credential":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this Email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sigin In with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
