import { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ConfirmOrder.module.css";
import PrimaryButton from "../../components/PrimaryButton";
import updateUser from "../../redux/actions/updateUser";
import updateStage from "../../redux/actions/updateStage";
import Subscription from "../Subscription";
import BackButton from "../BackButton";
import EmailInput from "../EmailInput";

const ConfirmOrder = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>();

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

  const placeOrder = () => {
    if (isValidEmail) {
      //
    } else {
      validateEmail();
    }
  };

  const validateEmail = () => {
    const emailRegExp =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const isValidEmail = emailRegExp.test(email.trim());

    setIsValidEmail(isValidEmail);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Confirm your order</div>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div onClick={() => dispatch(updateStage(stage - 1))}>
            <BackButton />
          </div>
        </div>
        <div className={styles.mainMain}>
          <EmailInput
            value={email}
            valid={isValidEmail}
            handleChange={handleChange}
            handleBlur={() => validateEmail()}
          />
        </div>
        <div className={styles.mainFooter}>
          <Subscription />
        </div>
      </div>
      <div className={styles.footer}>
        <PrimaryButton
          label="Confirm"
          isLoading={false}
          handleClick={placeOrder}
        />
      </div>
    </div>
  );
};

export default ConfirmOrder;
