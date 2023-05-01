import { useEffect } from "react";
import ContactMe from "./ContactMe";
import GetInTouch from "./GetInTouch";

export default function Contact(): JSX.Element {
  useEffect(() => {
    document.title = "My Portfolio | Contact Me";
  }, []);
  return (
    <main>
      <GetInTouch />
      <ContactMe />
    </main>
  );
}
