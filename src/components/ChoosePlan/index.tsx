import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./ChoosePlan.module.css";
import { baseAxios as axios } from "../../axios";
import Spinner from "../../components/Spinner";
import NextButton from "../../components/NextButton";
import updateStage from "../../redux/actions/updateStage";

interface IPlan {
  duration_months: number;
  price_usd_per_gb: number;
}

const ChoosePlan = () => {
  const [plans, setPlans] = useState<IPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios.get("/prices").then((res) => {
      setIsLoading(false);
      setPlans(res.data.subscription_plans);
      console.log(res.data.subscription_plans);
    });
  }, []);

  const stage = useSelector((state: any) => state.stage);
  const dispatch = useDispatch();

  const goToNext = () => {
    // validate first
    dispatch(updateStage(stage + 1));
  };

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {plans.map((plan, i) => (
            <div key={i}>{plan.duration_months}</div>
          ))}
          <div onClick={goToNext}>
            <NextButton label="Next" />
          </div>
        </>
      )}
    </div>
  );
};

export default ChoosePlan;
