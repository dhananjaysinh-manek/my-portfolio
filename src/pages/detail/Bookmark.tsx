import ProjectDetail from "./ProjectDetail";

import heroMobile from "../../images/detail/mobile/image-bookmark-hero@2x.jpg";
import heroTablet from "../../images/detail/tablet/image-bookmark-hero@2x.jpg";
import heroDesktop from "../../images/detail/desktop/image-bookmark-hero@2x.jpg";

import previewMobile1 from "../../images/detail/mobile/image-bookmark-preview-1@2x.jpg";
import previewTablet1 from "../../images/detail/tablet/image-bookmark-preview-1@2x.jpg";
import previewDesktop1 from "../../images/detail/desktop/image-bookmark-preview-1@2x.jpg";

import previewMobile2 from "../../images/detail/mobile/image-bookmark-preview-2@2x.jpg";
import previewTablet2 from "../../images/detail/tablet/image-bookmark-preview-2@2x.jpg";
import previewDesktop2 from "../../images/detail/desktop/image-bookmark-preview-2@2x.jpg";

interface bookmarkProps {
  projecturl: string;
}

export default function Bookmark({ projecturl }: bookmarkProps): JSX.Element {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="Money Management"
      description="
								This project required me to build a fully responsive landing page to the designs provided.
								I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
								such as the testimonial slider."
      keywords={["Interaction Design", "Front End Development"]}
      technologies={["HTML", "CSS", "JS"]}
      projecturl={projecturl}
      background="
      The Money management is a web application that allows users to manage their finances. The application is built using JavaScript and styled with CSS. The application has a responsive design that works well on desktop and mobile devices."
      
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next="RGBgame"
      previous="CineMax"
    />
  );
}
