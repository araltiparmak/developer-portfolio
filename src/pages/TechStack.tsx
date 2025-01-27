import { techStack } from "../data/DB.ts";
import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Chip } from "../components/atoms/Chip.tsx";
import { capitalize } from "../Utils.ts";

export const TechStack = () => {
  return (
    <section>
      <SectionTitle title="Tech Stack" />

      <div className="grid md:grid-cols gap-6">
        {Object.entries(techStack).map(([key, values]) => (
          <Card key={key}>
            <h3 className="text-xl font-bold mb-2">{capitalize(key)}</h3>
            <div className="flex flex-wrap gap-2">
              {values.map((value, index) => (
                <Chip key={index} text={value} />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
