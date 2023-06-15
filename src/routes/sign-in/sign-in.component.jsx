import "./SignIn.scss";
import {
  signInWithGooglePopup,
  createUserDocumentAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  };

  return (
    <div>
      <h1>Sign in working!</h1>
      <button onClick={logGoogleUser}>Click</button>
    </div>
  );
};

export default SignIn;
