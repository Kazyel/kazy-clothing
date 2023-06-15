import "./FormInputs.scss";

const FormInputs = ({ label, id, ...otherProps }) => {
  return (
    <div className="group">
      <input id={id} {...otherProps} className="form-input" />

      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInputs;
