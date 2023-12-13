import { signInWithGooglePopup } from "../../utils/Firebase/Firebase";

function SiginIn() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };

  return (
    <div>
      <h1>I am Sig-in Component </h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
}

export default SiginIn;
