import ProjectDetail from "./ProjectDetail";

import heroMobile from "../../images/detail/mobile/image-insure-hero@2x.jpg";
import heroTablet from "../../images/detail/tablet/image-insure-hero@2x.jpg";
import heroDesktop from "../../images/detail/desktop/image-insure-hero@2x.jpg";

import previewMobile1 from "../../images/detail/mobile/image-insure-preview-1@2x.jpg";
import previewTablet1 from "../../images/detail/tablet/image-insure-preview-1@2x.jpg";
import previewDesktop1 from "../../images/detail/desktop/image-insure-preview-1@2x.jpg";

import previewMobile2 from "../../images/detail/mobile/image-insure-preview-2@2x.jpg";
import previewTablet2 from "../../images/detail/tablet/image-insure-preview-2@2x.jpg";
import previewDesktop2 from "../../images/detail/desktop/image-insure-preview-2@2x.jpg";

interface insureProps {
  projecturl: string;
}

export default function Insure({projecturl}: insureProps): JSX.Element {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="RGB Game"
      description="
        This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. 
        The only JavaScript this project required was to enable the toggling of the mobile navigation."
      keywords={["Interaction Design", "Front End Development"]}
      technologies={["HTML", "CSS", "JS"]}
      projecturl={projecturl}
      background="
      The RGB game is a simple project developed using JavaScript, CSS, and HTML. This project is an interesting color guessing game where the user/player has to guess the result of the given RGB color combination and find the correct output of the color mixture. The user can guess the color until the option finishes.
      "
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next="cinemax"
      previous="money-management"
    />
  );
}
