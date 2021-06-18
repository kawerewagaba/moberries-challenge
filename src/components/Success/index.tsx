import styles from "./Success.module.css";
import NextButton from "../../components/NextButton";
import { Link } from "react-router-dom";
import Subscription from "../Subscription";

const Success = () => (
  <div className={styles.wrapper}>
    <div className={styles.header}>Successfully subscribed</div>
    <div className={styles.main}>
      <Subscription />
    </div>
    <div className={styles.footer}>
      <Link to="/profile" className={styles.link}>
        <NextButton label="Account" />
      </Link>
    </div>
  </div>
);

export default Success;
