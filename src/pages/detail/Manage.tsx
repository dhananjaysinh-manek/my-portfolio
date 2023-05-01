import ProjectDetail from "./ProjectDetail";

import heroMobile from "../../images/detail/mobile/image-manage-hero@2x.jpg";
import heroTablet from "../../images/detail/tablet/image-manage-hero@2x.jpg";
import heroDesktop from "../../images/detail/desktop/image-manage-hero@2x.jpg";

import previewMobile1 from "../../images/detail/mobile/image-manage-preview-1@2x.jpg";
import previewTablet1 from "../../images/detail/tablet/image-manage-preview-1@2x.jpg";
import previewDesktop1 from "../../images/detail/desktop/image-manage-preview-1@2x.jpg";

import previewMobile2 from "../../images/detail/mobile/image-manage-preview-2@2x.jpg";
import previewTablet2 from "../../images/detail/tablet/image-manage-preview-2@2x.jpg";
import previewDesktop2 from "../../images/detail/desktop/image-manage-preview-2@2x.jpg";

interface manageProps {
  projecturl: string;
}

export default function Manage({ projecturl }: manageProps): JSX.Element {
  return (
    <ProjectDetail
      heroImages={[heroMobile, heroTablet, heroDesktop]}
      title="CineMax"
      description="
								This project required me to build a fully responsive landing page to the designs provided.
								I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity,
								such as the testimonial slider."
      keywords={["Interaction Design", "Front End Development"]}
      technologies={["HTML", "CSS", "React Js", "JS"]}
      projecturl={projecturl}
      background="
      The OTT movie details is a web application that allows users to browse movies and view movie details such as synopsis, cast, and crew. The application is built using React JS and styled with CSS. The application has a responsive design that works well on desktop and mobile devices.
      "
      preview1={[previewMobile1, previewTablet1, previewDesktop1]}
      preview2={[previewMobile2, previewTablet2, previewDesktop2]}
      next="Money-management"
      previous="RGBgame"
      
    />
  );
}
