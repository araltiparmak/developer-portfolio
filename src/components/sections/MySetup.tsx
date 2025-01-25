import { setupItems } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Link } from "../atoms/Link.tsx";

export const MySetup = () => {
  return (
    <section>
      <SectionTitle title={"My Setup"} />
      <div className="space-y-4">
        {setupItems.map((item) => (
          <div
            key={item.title}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h3 className="font-bold">{item.title}</h3>
              {item.url && <Link url={item.url} text={"Link to the product"} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
