import { FC } from "react";
import styles from "./NextButton.module.css";
import PropTypes from "prop-types";
import { ReactComponent as NextIcon } from "../../assets/next.svg";

interface IProps {
  label: string;
}

const NextButton: FC<IProps> = ({ label }) => (
  <div role="button" className={styles.button}>
    <div className={styles.label}>{label}</div>
    <NextIcon />
  </div>
);

NextButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NextButton;
