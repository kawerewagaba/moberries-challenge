import { useState, ChangeEvent, FocusEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PaymentDetails.module.css";
import NextButton from "../../components/NextButton";
import updateUser from "../../redux/actions/updateUser";
import updateStage from "../../redux/actions/updateStage";
import Subscription from "../Subscription";
import CardInput from "../CardInput";
import BackButton from "../BackButton";
import {
  numberValid,
  expiryValid,
  codeValid,
} from "../../helpers/validateCard";

const PaymentDetails = () => {
  const { stage, user } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const [card, setCard] = useState<ICard>(user.card);

  const {
    number,
    expiry: { month, year },
    code,
  } = card;

  const initialValidateNumber = () => {
    if (number) {
      return numberValid(number);
    }

    return null;
  };

  const initialValidateExpiry = () => {
    if (month && year) {
      return expiryValid(month, year);
    }

    return null;
  };

  const initialValidateCVV = () => {
    if (code) {
      return codeValid(code);
    }

    return null;
  };

  const [isValidNumber, setIsValidNumber] = useState<Validation>(
    initialValidateNumber
  );
  const [isValidExpiry, setIsValidExpiry] = useState<Validation>(
    initialValidateExpiry
  );
  const [isValidCVV, setIsValidCVV] = useState<Validation>(initialValidateCVV);

  const goToNext = () => {
    if (isValidNumber && isValidExpiry && isValidCVV) {
      dispatch(
        updateUser({
          ...user,
          card,
        })
      );

      dispatch(updateStage(stage + 1));
    } else {
      validateNumber();
      validateExpiry();
      validateCVV();
    }
  };

  const goBack = () => {
    dispatch(
      updateUser({
        ...user,
        card,
      })
    );

    dispatch(updateStage(stage - 1));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    switch (name) {
      case "month":
        setCard({
          ...card,
          expiry: {
            ...card.expiry,
            month: event.target.value,
          },
        });
        break;

      case "year":
        setCard({
          ...card,
          expiry: {
            ...card.expiry,
            year: event.target.value,
          },
        });
        break;

      default:
        setCard({
          ...card,
          [event.target.name]: event.target.value,
        });
        break;
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    /**
     * validate input on blur
     */
    const { name } = event.target;

    switch (name) {
      case "number":
        validateNumber();
        break;

      case "code":
        validateCVV();
        break;

      default:
        validateExpiry();
    }
  };

  const validateNumber = () => {
    setIsValidNumber(numberValid(number));
  };

  const validateExpiry = () => {
    setIsValidExpiry(expiryValid(month, year));
  };

  const validateCVV = () => {
    setIsValidCVV(codeValid(code));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>Provide payment details</div>
      <div className={styles.main}>
        <div className={styles.mainHeader}>
          <div onClick={goBack}>
            <BackButton />
          </div>
        </div>
        <div className={styles.mainMain}>
          <CardInput
            card={card}
            valid={{ isValidNumber, isValidExpiry, isValidCVV }}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
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
