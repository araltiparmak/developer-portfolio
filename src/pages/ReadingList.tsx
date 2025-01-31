import { readingList } from "../data/DB.ts";
import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Link } from "../components/atoms/Link.tsx";
import { BookOpen } from "lucide-react";

export const ReadingList = () => {
  return (
    <section>
      <SectionTitle title="Reading List 📖" />

      <div className="space-y-4">
        {readingList.map((book) => (
          <Card key={book.title.trim()}>
            <div className="flex items-start space-x-4">
              <div className="p-2 bg-emerald-100 rounded-lg flex-shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold">{book.title}</h3>
                <div className="space-y-1 mt-1">
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <div>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-700 mt-2">
                      {book.progress}
                    </span>
                  </div>
                  {book.url && <Link url={book.url} label={"View Book →"} />}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
