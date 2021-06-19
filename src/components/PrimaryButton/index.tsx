import { FC } from "react";
import styles from "./PrimaryButton.module.css";
import PropTypes from "prop-types";
import Spinner from "../Spinner";

interface IProps {
  label: string;
  handleClick: () => void;
  isLoading: boolean;
}

const PrimaryButton: FC<IProps> = ({ label, handleClick, isLoading }) => (
  <div role="button" className={styles.button} onClick={handleClick}>
    {isLoading ? <Spinner /> : label}
  </div>
);

PrimaryButton.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PrimaryButton;
