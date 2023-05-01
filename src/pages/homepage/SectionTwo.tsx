import styles from "./styles/SectionTwo.module.css";
import SecondaryButton from "../../components/SecondaryButton";

import mobileProfile from "../../images/homepage/mobile/image-homepage-profile@2x.jpg";
import tabletProfile from "../../images/homepage/tablet/image-homepage-profile@2x.jpg";
import desktopProfile from "../../images/homepage/desktop/image-homepage-profile@2x.jpg";

export default function SectionTwo(): JSX.Element {
  return (
    <section className={styles.section} id="about-me">
      <div className={`container ${styles.container}`}>
        <picture className={styles.imageContainer}>
          <source srcSet={desktopProfile} media="(min-width: 1440px)" />
          <source srcSet={tabletProfile} media="(min-width: 768px)" />
          <img src={mobileProfile} alt="profile" className={styles.image} width="100%" />
        </picture>
        <div className={styles.boxContainer}>
          <h2 className="h2" style={{ marginBottom: "28px" }}>
            About Me
          </h2>
          <p
            className="body-1"
            style={{
              mixBlendMode: "normal",
              opacity: "0.8",
              textAlign: "left",
              marginBottom: "24px",
            }}
          >
           I am passionate about learning new technologies and keeping up-to-date with the latest trends in web development. I am always looking for new challenges that can help me grow as a developer.✨✨
          </p>
          <SecondaryButton text="go to portfolio" href="/portfolio" />
        </div>
      </div>
    </section>
  );
}
