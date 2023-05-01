import styles from "./styles/Footer.module.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import github from "../images/icons/github.svg";
import linkedin from "../images/icons/linkedin.svg";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageContainer} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" className={styles.image} />
        </div>
        <nav id="bottomnav" className={styles.nav}>
          <Link to="/" className={styles.item}>
            HOME
          </Link>
          <Link to="/portfolio" className={styles.item}>
            PORTFOLIO
          </Link>
          <Link to="/contact" className={styles.item}>
            CONTACT ME
          </Link>
        </nav>
        <div className={styles.iconContainer}>
          <a href="https://github.com/dhananjaysinh-manek" className={styles.iconButton} aria-label="github">
            <img src={github} alt="github" className={styles.icon} />
          </a>

          {/* <a href="/#" className={styles.iconButton} aria-label="stackoverflow">
            <img src={StackOverflow} alt="stackoverflow" className={styles.icon} />
          </a> */}
    

          <a href="https://www.linkedin.com/in/dhananjaysinh-manek-71691a240/" className={styles.iconButton} aria-label="linkedin">
            <img src={linkedin} alt="linkedin" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
}
