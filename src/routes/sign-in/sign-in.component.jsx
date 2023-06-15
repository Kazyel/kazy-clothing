import "./SignIn.scss";
import SignForm from "../../components/signup-form/SignForm";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentAuth,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  useEffect(
    () =>
      async function redirectEffect() {
        const response = await getRedirectResult(auth);

        if (response) {
          const { user } = response;
          const userDocRef = await createUserDocumentAuth(user);
        }
      },
    []
  );

  return (
    <section className="">
      <SignForm />
    </section>
  );
};

export default SignIn;
