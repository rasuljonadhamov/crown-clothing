import {
  signInWithGooglePopup,
  creteUserDocumentFromAuth,
} from "../../utils/Firebase/Firebase";

function SiginIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creteUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>I am Sig-in Component </h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
}

export default SiginIn;
