import { FC } from "react";
import styles from "./Checkbox.module.css";
import { ReactComponent as CheckIcon } from "../../assets/check.svg";

interface IProps {
  checked: boolean;
  handleClick: () => void;
}

const Checkbox: FC<IProps> = ({ checked, handleClick }) => (
  <div className={styles.wrapper} onClick={handleClick}>
    {checked && <CheckIcon />}
  </div>
);

export default Checkbox;
