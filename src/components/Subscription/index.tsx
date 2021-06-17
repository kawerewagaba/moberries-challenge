import { useSelector } from "react-redux";
import styles from "./Subscription.module.css";

const Subscription = () => {
  const {
    plan: { duration, price },
    storage,
    upfront,
  } = useSelector((state: any) => state.subscription);

  // calculate total
  let value = price * storage;

  if (upfront) {
    value -= value * 0.1;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.total}>
        <div className={styles.currency}>usd</div>
        <div className={styles.value}>{value}</div>
      </div>
      <div className={styles.summary}>
        {`Duration: ${duration} months / Storage: ${storage} GB / Payment: ${
          upfront ? "Yes" : "No"
        }`}
      </div>
    </div>
  );
};

export default Subscription;
