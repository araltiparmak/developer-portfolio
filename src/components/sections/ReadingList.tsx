import { readingList } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";

export const ReadingList = () => {
  return (
    <section>
      <SectionTitle title="Reading List" />

      <div className="space-y-4">
        {readingList.map((book) => (
          <div
            key={book.title}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <h3 className="font-bold">{book.title}</h3>
              <p className="text-gray-600">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
