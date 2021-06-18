import { FC, ChangeEvent } from "react";
import styles from "./EmailInput.module.css";
import PropTypes from "prop-types";

interface IProps {
  value: string;
  valid: boolean | null;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: () => void;
}

const EmailInput: FC<IProps> = ({ value, valid, handleChange, handleBlur }) => (
  <div className={styles.wrapper}>
    <div className={styles.label}>Email address</div>
    <input
      type="email"
      placeholder="email@domain.com"
      name="email"
      value={value}
      className={`${styles.input} ${
        valid === false ? styles.inputNotValid : ""
      }`}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  </div>
);

EmailInput.propTypes = {
  value: PropTypes.string.isRequired,
  valid: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default EmailInput;
