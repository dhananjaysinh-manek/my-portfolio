import styles from "./styles/Portfolio.module.css";
import { useEffect } from "react";
import SectionThree from "../homepage/SectionThree";
import Project from "./Project";

import manageMobil from "../../images/portfolio/mobile/image-portfolio-manage@2x.jpg";
import manageTablet from "../../images/portfolio/tablet/image-portfolio-manage@2x.jpg";
import manageDesktop from "../../images/portfolio/desktop/image-portfolio-manage@2x.jpg";

import bookmarkMobil from "../../images/portfolio/mobile/image-portfolio-bookmark@2x.jpg";
import bookmarkTablet from "../../images/portfolio/tablet/image-portfolio-bookmark@2x.jpg";
import bookmarkDesktop from "../../images/portfolio/desktop/image-portfolio-bookmark@2x.jpg";

import insureMobil from "../../images/portfolio/mobile/image-portfolio-insure@2x.jpg";
import insureTablet from "../../images/portfolio/tablet/image-portfolio-insure@2x.jpg";
import insureDesktop from "../../images/portfolio/desktop/image-portfolio-insure@2x.jpg";


export default function Portfolio(): JSX.Element {
  useEffect(() => {
    document.title = "My Portfolio | My Projects";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className={styles.main}>
      <Project.Right
        title="CineMax"
        description="
        The OTT movie details is a web application that allows users to browse movies and view movie details such as synopsis, cast, and crew. The application is built using React JS and styled with CSS. The application has a responsive design that works well on desktop and mobile devices.
      "
        screenshots={[manageMobil, manageTablet, manageDesktop]}
        param="cinemax"
      />
      <Project.Left
        title="Money Management"
        description="
        The Money management is a web application that allows users to manage their finances. The application is built using JavaScript and styled with CSS. The application has a responsive design that works well on desktop and mobile devices."
        screenshots={[bookmarkMobil, bookmarkTablet, bookmarkDesktop]}
        param="money-management"
      />
      <Project.Right
        title="RGB Color Gussing Game"
        description="
        The RGB game is a simple project developed using JavaScript, CSS, and HTML. This project is an interesting color guessing game where the user/player has to guess the result of the given RGB color combination and find the correct output of the color mixture. The user can guess the color until the option finishes.
      "
        screenshots={[insureMobil, insureTablet, insureDesktop]}
        param="RGBgame"
      />
     
      <SectionThree />
    </main>
  );
}
