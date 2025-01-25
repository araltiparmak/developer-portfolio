import { aboutText } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Card } from "../atoms/Card.tsx";

export const About = () => {
  return (
    <section>
      <SectionTitle title="About Me" />

      <div className="space-y-4">
        <Card>
          <h3 className="font-bold">{aboutText}</h3>
        </Card>
      </div>
    </section>
  );
};
