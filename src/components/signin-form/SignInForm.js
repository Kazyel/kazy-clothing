import { useState } from "react";
import Button from "../Button/Button";
import FormInputs from "../formInputs/FormInputs";
import "./SignInForm.scss";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password.");
          break;
        case "auth/user-not-found":
          alert("No user associated with e-mail.");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="form-wrapper">
      <h2>Already have an account?</h2>
      <p className="sign-in-form__subtitle">
        Login here with your email and password!
      </p>
      <form onSubmit={handleSubmit}>
        <FormInputs
          label="Email"
          id="email"
          type="text"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInputs
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="button-wrapper">
          <Button buttonName="Login" buttonType="normal" type="submit" />
          <Button
            type="button"
            buttonName="Login with Google"
            buttonType="google"
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
