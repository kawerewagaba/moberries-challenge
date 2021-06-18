import { useState, ChangeEvent, FocusEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PaymentDetails.module.css";
import NextButton from "../../components/NextButton";
import updateUser from "../../redux/actions/updateUser";
import updateStage from "../../redux/actions/updateStage";
import Subscription from "../Subscription";
import CardInput from "../CardInput";
import BackButton from "../BackButton";

const PaymentDetails = () => {
  const { stage, user } = useSelector((state: any) => state);

  const dispatch = useDispatch();

  const [card, setCard] = useState<ICard>(user.card);

  const [isValidCard, setIsValid] = useState<CardValidation>({
    isValidNumber: null,
    isValidExpiry: null,
    isValidCVV: null,
  });

  const {
    number,
    expiry: { month, year },
    code,
  } = card;

  const goToNext = () => {
    console.log(isValidCard);
    // const { isValidNumber, isValidExpiry, isValidCVV } = isValidCard;

    // if (isValidNumber && isValidExpiry && isValidCVV) {
    dispatch(
      updateUser({
        ...user,
        card,
      })
    );

    dispatch(updateStage(stage + 1));
    // } else {
    //   validateNumber();
    //   validateExpiry();
    //   validateCVV();
    // }
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
    const isValidNumber = /^[0-9]{16}$/.test(number.replace(/\s/g, ""));

    setIsValid({
      ...isValidCard,
      isValidNumber,
    });
  };

  const validateExpiry = () => {
    const isValidExpiryMonth = /^0?[1-9]|1[0-2]$/.test(
      month.replace(/\s/g, "")
    );
    const isValidExpiryYear = /^[0-9]{2}$/.test(year.replace(/\s/g, ""));

    setIsValid({
      ...isValidCard,
      isValidExpiry: isValidExpiryMonth && isValidExpiryYear,
    });
  };

  const validateCVV = () => {
    const isValidCVV = /^[0-9]{3}$/.test(code.replace(/\s/g, ""));

    setIsValid({
      ...isValidCard,
      isValidCVV,
    });
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
            valid={isValidCard}
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
