import styles from "./BackButton.module.css";
import { ReactComponent as BackIcon } from "../../assets/back.svg";

const BackButton = () => (
  <div data-testid="back-button" role="button" className={styles.button}>
    <BackIcon className={styles.icon} />
    <div className={styles.label}>Back</div>
  </div>
);

export default BackButton;
