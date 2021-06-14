import styles from "./Error.module.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import NextButton from "../../components/NextButton";
import { Link } from "react-router-dom";

const Error = () => (
  <div>
    <Header />
    <main className={styles.main}>
      <div className={styles.error}>404</div>
      <div className={styles.message}>Page Not Found</div>
      <Link to="/" className={styles.link}>
        <NextButton label="Home" />
      </Link>
    </main>
    <Footer />
  </div>
);

export default Error;
