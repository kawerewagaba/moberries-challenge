import { useSelector } from "react-redux";
import styles from "./Total.module.css";

const Total = () => {
  const {
    plan: { price },
    storage,
    upfront,
  } = useSelector((state: any) => state.subscription);

  // calculate total
  let value = price * storage;

  if (upfront) {
    value -= value * 0.1;
  }

  return (
    <div className={styles.total}>
      <div className={styles.currency}>usd</div>
      <div className={styles.value}>{value}</div>
    </div>
  );
};

export default Total;
