import styles from "./styles/GetInTouch.module.css";

import github from "../../images/icons/github.svg";
import twitter from "../../images/icons/twitter.svg";
import linkedin from "../../images/icons/linkedin.svg";
import { useMediaQuery } from "react-responsive";

export default function GetInTouch(): JSX.Element {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1440px)",
  });

  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <div className={styles.wrapper}>
          <h2 className={`h2 ${styles.title}`}>Get in Touch</h2>
          <div className={styles.bodyContainer}>
            <p
              className={isDesktop ? `body-1 ${styles.text}` : `body-2 ${styles.text}`}
              style={{ opacity: "0.8" }}
            >
             I am passionate about learning new technologies and keeping up-to-date with the latest trends in web development. I am always looking for new challenges that can help me grow as a developer.✨✨
            </p>
            <div className={styles.iconContainer}>
              <a href="https://github.com/dhananjaysinh-manek" className={styles.iconLink}>
                <img src={github} alt="github" className={styles.icon} aria-label="github" />
              </a>

              {/* <a href="/#" className={styles.iconLink} aria-label="twitter">
                <img src={twitter} alt="twitter" className={styles.icon} />
              </a> */}

              <a href="https://www.linkedin.com/in/dhananjaysinh-manek-71691a240/" className={styles.iconLink} aria-label="linkedin">
                <img src={linkedin} alt="linkedin" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
