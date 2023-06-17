import "./Button.scss";

const BUTTON_TYPES = {
  google: "google-button",
  inverted: "inverted-button",
  normal: "normal-button",
};

const Button = ({ buttonName, buttonType, ...otherProps }) => {
  return (
    <button className={`button ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
      {buttonName}
    </button>
  );
};

export default Button;
