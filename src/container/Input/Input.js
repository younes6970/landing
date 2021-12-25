import styles from "./input.module.scss";
import PropTypes from "prop-types";
const Input = (props) => {
  const { label, placeholder, onChange, value, name, type } = props;
  return (
    <div className={styles.boxInput}>
      <label className={`textBlackDark flex1 weight400 font20`} htmlFor={name}>
        {label} :
      </label>
      <input
        id={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        className={styles.itemInput}
      />
    </div>
  );
};
export default Input;
Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
