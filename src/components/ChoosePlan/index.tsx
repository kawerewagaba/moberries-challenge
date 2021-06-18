import { Component } from "react";
import { connect } from "react-redux";
import styles from "./ChoosePlan.module.css";
import { baseAxios as axios } from "../../axios";
import Spinner from "../../components/Spinner";
import NextButton from "../../components/NextButton";
import updateSubscription from "../../redux/actions/updateSubscription";
import updateStage from "../../redux/actions/updateStage";
import Plan from "../../components/Plan";
import Subscription from "../Subscription";
import SelectInput from "../SelectInput";
import ToggleSwitch from "../Switch";

interface IProps {
  stage: number;
  subscription: ISubscription;
  updateStage: (newStage: number) => void;
  updateSubscription: (subscription: ISubscription) => void;
}

interface IState {
  isLoading: boolean;
  plans: IPlan[];
  selectedPlan: IPlan;
  storageOptions: number[];
  selectedStorage: number;
  upfront: boolean;
}

class ChoosePlan extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    const {
      subscription: { plan, storage, upfront },
    } = props;

    this.state = {
      isLoading: false,
      plans: [],
      selectedPlan: plan,
      storageOptions: [5, 10, 50],
      selectedStorage: storage,
      upfront: upfront,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    axios.get("/prices").then((res) => {
      this.setState({
        isLoading: false,
      });

      // transform
      const plans = res.data.subscription_plans.map((p: any) => ({
        duration: p.duration_months,
        price: p.price_usd_per_gb,
      }));

      this.setState({
        plans,
        selectedPlan: plans.find((p: any) => p.duration === 12),
      });
    });
  }

  componentDidUpdate(prevProps: IProps, prevState: IState) {
    const { selectedPlan, selectedStorage, upfront } = this.state;

    if (
      prevState.selectedPlan !== selectedPlan ||
      prevState.selectedStorage !== selectedStorage ||
      prevState.upfront !== upfront
    ) {
      this.props.updateSubscription({
        plan: selectedPlan,
        storage: selectedStorage,
        upfront,
      });
    }
  }

  setPlan(plan: IPlan) {
    this.setState({
      selectedPlan: plan,
    });
  }

  setStorage(storage: number) {
    this.setState({
      selectedStorage: storage,
    });
  }

  setUpfront(option: boolean) {
    this.setState({
      upfront: option,
    });
  }

  render() {
    const {
      isLoading,
      plans,
      selectedPlan,
      storageOptions,
      selectedStorage,
      upfront,
    } = this.state;

    const { stage, updateStage } = this.props;

    return (
      <div className={styles.wrapper}>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <div className={styles.header}>Choose a plan</div>
            <div className={styles.main}>
              <div className={styles.mainHeader}>
                <div className={styles.selectWrapper}>
                  <div className={styles.selectHeader}>
                    Select amount of storage
                  </div>
                  <SelectInput
                    options={storageOptions}
                    selected={selectedStorage}
                    updateSelected={(option) => this.setStorage(option)}
                  />
                </div>
                <div className={styles.switchWrapper}>
                  <div className={styles.switchHeader}>Upfront payment</div>
                  <ToggleSwitch
                    selected={upfront}
                    updateSelected={(option) => this.setUpfront(option)}
                  />
                </div>
              </div>
              <div className={styles.mainMain}>
                {plans.map((plan, i) => (
                  <Plan
                    key={i}
                    duration={plan.duration}
                    price={plan.price}
                    handleClick={() => this.setPlan(plan)}
                    selected={plan === selectedPlan}
                  />
                ))}
              </div>
              <div className={styles.mainFooter}>
                <Subscription />
              </div>
            </div>
            <div className={styles.footer}>
              <div onClick={() => updateStage(stage + 1)}>
                <NextButton label="Next" />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  stage: state.stage,
  subscription: state.subscription,
});

const mapDispatchToProps = {
  updateSubscription,
  updateStage,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChoosePlan);
