import "./InputField.css";

const inputField = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  //Destructuración
  const { type = "text" } = props;

  const manageChange = (e) => {
    props.updateValue(e.target.value);
  };
  return (
    <div className={`inputField inputField-${type}`}>
      <label>{props.label}</label>
      <input
        placeholder={placeholderModified}
        required={props.required}
        value={props.value}
        onChange={manageChange}
        type={type}
      />
    </div>
  );
};

export default inputField;
