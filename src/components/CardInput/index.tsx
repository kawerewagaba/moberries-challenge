import { ChangeEvent, FocusEvent, FC } from "react";
import styles from "./CardInput.module.css";

interface IProps {
  card: ICard;
  valid: CardValidation;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: FocusEvent<HTMLInputElement>) => void;
}

const CardInput: FC<IProps> = ({ card, valid, handleChange, handleBlur }) => {
  const {
    number,
    expiry: { month, year },
    code,
  } = card;

  const { isValidNumber, isValidExpiry, isValidCVV } = valid;

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
            onBlur={handleBlur}
          />
          <span className={styles.expirySeparator}>/</span>
          <input
            type="text"
            placeholder="YY"
            name="year"
            value={year}
            onChange={handleChange}
            onBlur={handleBlur}
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
