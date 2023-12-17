import SignUpForm from "../../SiginUpForm/SignUpForm";
import {
  signInWithGooglePopup,
  creteUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase";

function SiginIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocRef = await creteUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am Sig-in Component </h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
      <SignUpForm />
    </div>
  );
}

export default SiginIn;
