import { setupItems } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Link } from "../atoms/Link.tsx";
import { Card } from "../atoms/Card.tsx";

export const MySetup = () => {
  return (
    <section>
      <SectionTitle title={"My Setup"} />
      <div className="space-y-4">
        {setupItems.map((item) => (
          <Card key={item.title.trim()}>
            <div>
              <h3 className="font-bold">{item.title}</h3>
              {item.url && <Link url={item.url} text={"Link to the product"} />}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
