import styles from "./textArea.module.scss"
import PropTypes from "prop-types";
const TextArea = (props) => {
    const { label, placeholder, onChange, value, name } = props;
    return (
        <div className={styles.boxTextArea}>
            <label className={`textBlackDark flex1 weight400 font20`} htmlFor={name}>
                {label} :
            </label>
            <textarea
                id={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={styles.itemTextArea}
            />
        </div>
    );
};
export default TextArea;
TextArea.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
