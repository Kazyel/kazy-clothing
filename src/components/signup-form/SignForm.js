import "./signform.scss";
import FormInputs from "../formInputs/FormInputs";
import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      resetFormFields();
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentAuth(user, { displayName });
      await resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use.");
      }

      console.log(error.message);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="form-wrapper">
      <h1>Create your account!</h1>
      <form className="group" onSubmit={handleSubmit}>
        <FormInputs
          label="Display Name"
          id="name"
          name="displayName"
          type="text"
          value={displayName}
          onChange={handleChange}
          required
        />
        <FormInputs
          label="Email"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInputs
          label="Password"
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />
        <FormInputs
          label="Confirm Password"
          id="confirm-password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <div className="button-wrapper">
          <button type="submit">Sign Up</button>
          <button onClick={logGoogleUser}>Sign Up with Google</button>
        </div>
      </form>
    </div>
  );
};

export default SignForm;
