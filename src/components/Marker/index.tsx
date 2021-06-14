import { FC } from "react";
import styles from "./Marker.module.css";
import PropType from "prop-types";

interface IProps {
  current: boolean;
  handleClick: () => void;
}

const Marker: FC<IProps> = ({ current, handleClick }) => (
  <div
    className={`${styles.marker} ${current ? styles.current : ""}`}
    onClick={handleClick}
  />
);

Marker.propTypes = {
  current: PropType.bool.isRequired,
  handleClick: PropType.func.isRequired,
};

export default Marker;
