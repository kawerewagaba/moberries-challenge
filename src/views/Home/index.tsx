import { useSelector } from "react-redux";
import styles from "./Home.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ChoosePlan from "../../components/ChoosePlan";
import PaymentDetails from "../../components/PaymentDetails";
import ConfirmOrder from "../../components/ConfirmOrder";
import Success from "../../components/Success";

const Home = () => {
  const stage = useSelector((state: any) => state.stage);

  const renderSwitch = (stage: number) => {
    switch (stage) {
      case 0:
        return <ChoosePlan />;

      case 1:
        return <PaymentDetails />;

      case 2:
        return <ConfirmOrder />;

      case 3:
        return <Success />;

      default:
        return <ChoosePlan />;
    }
  };

  return (
    <div>
      <Header />
      <main className={styles.main}>{renderSwitch(stage)}</main>
      <Footer />
    </div>
  );
};

export default Home;
