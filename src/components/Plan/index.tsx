import { FC } from "react";
import styles from "./Plan.module.css";
import PropTypes from "prop-types";

interface IProps {
  duration: number;
  price: number;
  handleClick: () => void;
  selected: boolean;
}

const Plan: FC<IProps> = ({ duration, price, handleClick, selected }) => (
  <div
    className={`${styles.plan} ${selected ? styles.selected : ""}`}
    onClick={handleClick}
  >
    <div className={styles.name}>
      <div className={styles.nameHeader}>Duration</div>
      <div className={styles.nameMain}>{`${duration} Months`}</div>
    </div>
    <div className={styles.price}>{`$${price} / month`}</div>
  </div>
);

Plan.propTypes = {
  duration: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default Plan;
