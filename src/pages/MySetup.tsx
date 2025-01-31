import { setupItems } from "../data/DB.ts";
import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Link } from "../components/atoms/Link.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Icon } from "../components/atoms/Icon.tsx";

export const MySetup = () => {
  return (
    <section>
      <SectionTitle title={"My Setup"} />
      <div className="space-y-4">
        {setupItems.map((item) => (
          <Card key={item.title.trim()}>
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                <Icon name={item.icon} color={"text-blue-600"} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <ul className="space-y-1">
                  {item.specs.map((spec, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>{" "}
                      {spec}
                    </li>
                  ))}
                </ul>
                {item.url && <Link url={item.url} label={"View Product →"} />}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
