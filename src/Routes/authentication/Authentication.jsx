import SignUpForm from "../../SiginUpForm/SignUpForm";
import SignInForm from "../../components/SiginInForm/SignInForm";
import "./Authentication.scss";

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
