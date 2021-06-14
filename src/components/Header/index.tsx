import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { ReactComponent as ProfileIcon } from "../../assets/profile.svg";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <header>
    <Link to="/" className={styles.logo}>
      <Logo />
    </Link>
    <nav>
      <Link className={styles.icon} to="/profile">
        <ProfileIcon />
      </Link>
    </nav>
  </header>
);

export default Header;
