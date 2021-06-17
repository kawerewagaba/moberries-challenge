import { ChangeEvent, FocusEvent, FC, useState } from "react";
import styles from "./CardInput.module.css";

interface IProps {
  card: ICard;
}

interface IValid {
  isValidNumber: boolean | null;
  isValidExpiry: boolean | null;
  isValidCVV: boolean | null;
}

const CardInput: FC<IProps> = ({ card }) => {
  const [info, setInfo] = useState<ICard>(card);

  const [isValid, setIsValid] = useState<IValid>({
    isValidNumber: null,
    isValidExpiry: null,
    isValidCVV: null,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    switch (name) {
      case "month":
        setInfo({
          ...info,
          expiry: {
            ...info.expiry,
            month: event.target.value,
          },
        });
        break;

      case "year":
        setInfo({
          ...info,
          expiry: {
            ...info.expiry,
            year: event.target.value,
          },
        });
        break;

      default:
        setInfo({
          ...info,
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

      case "cvv":
        validateCVV();
        break;

      default:
    }
  };

  const validateNumber = () => {
    const isValidNumber = /^[0-9]{16}$/.test(number.replace(/\s/g, ""));

    setIsValid({
      ...isValid,
      isValidNumber,
    });
  };

  const validateExpiry = () => {
    const isValidExpiryMonth = /^0?[1-9]|1[0-2]$/.test(
      month.replace(/\s/g, "")
    );
    const isValidExpiryYear = /^[0-9]{2}$/.test(year.replace(/\s/g, ""));

    setIsValid({
      ...isValid,
      isValidExpiry: isValidExpiryMonth && isValidExpiryYear,
    });
  };

  const validateCVV = () => {
    const isValidCVV = /^[0-9]{3}$/.test(code.replace(/\s/g, ""));

    setIsValid({
      ...isValid,
      isValidCVV,
    });
  };

  const {
    number,
    expiry: { month, year },
    code,
  } = info;
  const { isValidNumber, isValidExpiry, isValidCVV } = isValid;

  return (
    <div className={styles.wrapper}>
      <div className={styles.label}>Card details</div>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="0000 0000 0000 0000"
          name="number"
          value={number}
          className={`${styles.number} ${
            isValidNumber === false ? styles.numberNotValid : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <div
          className={`${styles.expiry} ${
            isValidExpiry === false ? styles.expiryNotValid : ""
          }`}
        >
          <input
            type="text"
            placeholder="MM"
            name="month"
            value={month}
            onChange={handleChange}
            onBlur={validateExpiry}
          />
          <span className={styles.expirySeparator}>/</span>
          <input
            type="text"
            placeholder="YY"
            name="year"
            value={year}
            onChange={handleChange}
            onBlur={validateExpiry}
          />
        </div>
        <input
          type="text"
          placeholder="CVV"
          name="code"
          value={code}
          className={`${styles.cvv} ${
            isValidCVV === false ? styles.cvvNotValid : ""
          }`}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </div>
    </div>
  );
};

export default CardInput;
