import { useState, ChangeEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import { altAxios as axios } from "../../axios";
import styles from "./ConfirmOrder.module.css";
import PrimaryButton from "../../components/PrimaryButton";
import updateUser from "../../redux/actions/updateUser";
import updateStage from "../../redux/actions/updateStage";
import Subscription from "../Subscription";
import BackButton from "../BackButton";
import EmailInput from "../EmailInput";
import Checkbox from "../Checkbox";

const ConfirmOrder = () => {
  const { stage, user, subscription } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const [email, setEmail] = useState<string>(user.email);
  const [isValidEmail, setIsValidEmail] = useState<boolean>();

  const [consent, setConsent] = useState<boolean>(user.consent);

  const goBack = () => {
    dispatch(
      updateUser({
        ...user,
        email,
        consent,
      })
    );

    dispatch(updateStage(stage - 1));
  };

  const placeOrder = () => {
    // if (isValidEmail && consent) {
    dispatch(
      updateUser({
        ...user,
        email,
        consent,
      })
    );

    axios
      .post("/post", {
        user,
        subscription,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // } else {
    //   validateEmail();
    // }
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

  const toggleConsent = () => {
    setConsent(!consent);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Confirm your order</div>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div onClick={goBack}>
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
          <div className={styles.terms} onClick={toggleConsent}>
            <Checkbox checked={consent} handleClick={toggleConsent} /> I agree
            to the terms and conditions.
          </div>
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
