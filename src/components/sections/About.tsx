import { aboutText } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";

export const About = () => {
  return (
    <section>
      <SectionTitle title="About Me" />
      <p className="text-gray-700">{aboutText}</p>
    </section>
  );
};
