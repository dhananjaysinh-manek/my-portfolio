import styles from "./styles/Detail.module.css";
import { useEffect } from "react";
import { useParams } from "react-router";
import SectionThree from "../homepage/SectionThree";
import Manage from "./Manage";
import Bookmark from "./Bookmark";
import Insure from "./Insure";
import { url } from "inspector";

export default function Detail(): JSX.Element {
  let { id } = useParams();

  useEffect(() => {
    document.title = "My Portfolio | Project Details";
  }, []);

  return (
    <main className={styles.main}>
      {id === "cinemax" && <Manage projecturl={"https://cinemax-six.vercel.app/"}/>}
      {id === "money-management" && <Bookmark projecturl="https://money-management-sigma.vercel.app/"/>}
      {id === "RGBgame" && <Insure projecturl={"https://rgb-color-gussing-game.vercel.app/"} />}
      <SectionThree />
    </main>
  );
}
