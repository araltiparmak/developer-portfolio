import {
  readingList,
  ReadingListItem,
  ReadingProgress,
} from "../data/readingList.ts";
import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Link } from "../components/atoms/Link.tsx";
import { Icon } from "../components/atoms/Icon.tsx";

export const ReadingList = () => {
  return (
    <section>
      <SectionTitle title=".readingList (2024 - 2025) 📖" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {readingList.map((book) => (
          <BookCard book={book} />
        ))}
      </div>
    </section>
  );
};

const BookCard = ({ book }: { book: ReadingListItem }) => {
  const styles = BOOK_STYLES[book.progress];

  return (
    <Card key={book.title.trim()}>
      <div className="flex items-start space-x-4">
        <div className={`p-2 rounded-lg flex-shrink-0 ${styles.bg}`}>
          <Icon name={styles.icon} color={styles.text} />
        </div>
        <div>
          <h3 className="font-bold">{book.title}</h3>
          <div className="space-y-1 mt-1">
            <p className={`text-sm ${styles.text}`}>by {book.author}</p>
            <ReadingStatusBadge progress={book.progress} styles={styles} />
            {book.url && <Link url={book.url} label={"View Book →"} />}
          </div>
        </div>
      </div>
    </Card>
  );
};

const ReadingStatusBadge = ({ progress, styles }: BookStatusBadgeProps) => (
  <div>
    <div
      className={`inline-block px-2 py-1 text-xs rounded-full ${styles.bg} ${styles.text} mt-2`}
    >
      {progress}
    </div>
  </div>
);

type BookStatusBadgeProps = {
  progress: ReadingProgress;
  styles: BookStyle;
};

type BookStyle = {
  bg: string;
  text: string;
  icon: string;
};

const BOOK_STYLES: Record<ReadingProgress, BookStyle> = {
  [ReadingProgress.CurrentlyReading]: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    icon: "BookOpen",
  },
  [ReadingProgress.NotStarted]: {
    bg: "bg-gray-100",
    text: "text-gray-600",
    icon: "Book",
  },
  [ReadingProgress.Finished]: {
    bg: "bg-emerald-100",
    text: "text-emerald-600",
    icon: "Book",
  },
} as const;
