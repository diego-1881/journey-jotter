import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <NavLink to="/">
      <h1 className={styles.logo}>Journey Jotter</h1>
    </NavLink>
  );
}

export default Logo;
