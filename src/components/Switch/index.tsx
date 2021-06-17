import { FC } from "react";
import styles from "./Switch.module.css";
import PropTypes from "prop-types";

interface IProps {
  selected: boolean;
  updateSelected: (option: boolean) => void;
}

const Switch: FC<IProps> = ({ selected, updateSelected }) => (
  <div className={styles.wrapper}>
    <div className={styles.label}>No</div>
    <div
      className={`${styles.switch} ${selected ? styles.on : styles.off}`}
      onClick={() => updateSelected(!selected)}
    >
      <div
        className={`${styles.button} ${
          selected ? styles.buttonOn : styles.buttonOff
        }`}
      />
    </div>
    <div className={styles.label}>Yes</div>
  </div>
);

Switch.propTypes = {
  selected: PropTypes.bool.isRequired,
  updateSelected: PropTypes.func.isRequired,
};

export default Switch;
