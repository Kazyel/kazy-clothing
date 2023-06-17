import './authenticator.scss'
import SignUpForm from "../../components/signup-form/SignUpForm";
import SignInForm from "../../components/signin-form/SignInForm";

const Authentication = () => {
  return (
    <section className='auth-section'>
      <SignInForm />
      <SignUpForm />
    </section>
  );
};

export default Authentication;
