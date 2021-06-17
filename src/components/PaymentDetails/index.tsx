import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PaymentDetails.module.css";
import NextButton from "../../components/NextButton";
import updateUser from "../../redux/actions/updateUser";
import updateStage from "../../redux/actions/updateStage";
import Subscription from "../Subscription";
import CardInput from "../CardInput";
import BackButton from "../BackButton";

const PaymentDetails = () => {
  const [details, setDetails] = useState();

  const {
    stage,
    user: { card },
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const goToNext = () => {
    // validate first

    // dispatch(updateUser());

    dispatch(updateStage(stage + 1));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Provide payment details</div>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div onClick={() => dispatch(updateStage(stage - 1))}>
            <BackButton />
          </div>
        </div>
        <div className={styles.mainMain}>
          <CardInput card={card} />
        </div>
        <div className={styles.mainFooter}>
          <Subscription />
        </div>
      </div>
      <div className={styles.footer}>
        <div onClick={goToNext}>
          <NextButton label="Next" />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
