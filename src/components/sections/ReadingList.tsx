import { readingList } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Card } from "../atoms/Card.tsx";

export const ReadingList = () => {
  return (
    <section>
      <SectionTitle title="Reading List" />

      <div className="space-y-4">
        {readingList.map((book) => (
          <Card key={book.title.trim()}>
            <div>
              <h3 className="font-bold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
