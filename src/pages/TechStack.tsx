import { techStack } from "../data/DB.ts";
import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Chip } from "../components/atoms/Chip.tsx";
import { Icon } from "../components/atoms/Icon.tsx";

export const TechStack = () => {
  return (
    <section>
      <SectionTitle title="Tech Stack 🛠" />

      <div className="grid md:grid-cols gap-6">
        {Object.entries(techStack).map(([key, stack]) => (
          <Card key={key}>
            <div className="flex items-start gap-3">
              <div className="p-2 bg-violet-100 rounded-lg">
                <Icon name={stack.icon} color={"text-violet-600"} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold capitalize mb-3">{key}</h3>

                <div className="flex flex-wrap gap-2">
                  {stack.items.map((item, index) => (
                    <Chip key={index} text={item} />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
