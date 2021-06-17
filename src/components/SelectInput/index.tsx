import { FC, useState } from "react";
import styles from "./SelectInput.module.css";
import PropTypes from "prop-types";
import { ReactComponent as DownIcon } from "../../assets/down.svg";

interface IProps {
  options: number[];
  selected: number;
  updateSelected: (option: number) => void;
}

const SelectInput: FC<IProps> = ({ options, selected, updateSelected }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  return (
    <div
      className={styles.wrapper}
      onClick={() => setShowOptions(!showOptions)}
    >
      <div className={styles.value}>
        <div>{`${selected} GB`}</div>
        <DownIcon />
      </div>
      {showOptions && (
        <div className={styles.options}>
          {options.map((option, i) => (
            <div
              key={i}
              className={styles.option}
              onClick={() => updateSelected(option)}
            >
              {`${option} GB`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.number.isRequired,
  updateSelected: PropTypes.func.isRequired,
};

export default SelectInput;
