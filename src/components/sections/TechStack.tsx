import { techStack } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Card } from "../atoms/Card.tsx";
import { Chip } from "../atoms/Chip.tsx";
import { capitalize } from "../../Utils.ts";

export const TechStack = () => {
  return (
    <section>
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols gap-6">
        {Object.entries(techStack).map(([key, values]) => (
          <Card key={key}>
            <h3 className="font-bold">{capitalize(key)}</h3>

            {values.map((value, index) => (
              <div>
                <Chip key={index} text={value} />
              </div>
            ))}
          </Card>
        ))}
      </div>
    </section>
  );
};
