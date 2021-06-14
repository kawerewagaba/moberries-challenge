import { FC } from "react";
import styles from "./NextButton.module.css";
import PropTypes from "prop-types";
import { ReactComponent as NextIcon } from "../../assets/next.svg";

interface IProps {
  label: string;
}

const NextButton: FC<IProps> = ({ label }) => (
  <button type="button" className={styles.button}>
    {label}
    <NextIcon />
  </button>
);

NextButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default NextButton;
