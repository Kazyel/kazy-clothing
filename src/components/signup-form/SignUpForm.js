import "./SignUpForm.scss";
import FormInputs from "../formInputs/FormInputs";
import Button from "../Button/Button";
import { useState } from "react";
import {
  createUserDocumentAuth,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
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
      <h2>Don't have an account yet?</h2>
      <p className="sign-up-form__subtitle">Create your account here!</p>
      <form onSubmit={handleSubmit}>
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
        <div style={{ width: "50%" }}>
          <Button type="submit" buttonName="Sign Up" buttonType="normal" />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
