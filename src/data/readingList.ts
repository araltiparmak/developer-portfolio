export enum ReadingProgress {
  NotStarted = "Not Started",
  CurrentlyReading = "Currently Reading",
  Finished = "Finished",
}

export type ReadingListItem = {
  title: string;
  author: string;
  url: string;
  progress: ReadingProgress;
};

export const readingList: ReadingListItem[] = [
  {
    title: "Ultralearning",
    author: "Scott Young",
    url: "https://www.amazon.com/Ultralearning-Strategies-Mastering-Skills-Getting/dp/0008305706",
    progress: ReadingProgress.CurrentlyReading,
  },
  {
    title: "Coding Interview Patterns",
    author: "Alex Xu & Shaun Gunawardane",
    url: "  https://www.amazon.com/Coding-Interview-Patterns-Nail-Your/dp/1736049135",
    progress: ReadingProgress.CurrentlyReading,
  },
  {
    title: "Willpower",
    author: "Roy F. Baumeister & John Tierney",
    url: "https://www.amazon.de/-/en/Willpower-Rediscovering-Greatest-Human-Strength/dp/0143122231",
    progress: ReadingProgress.Finished,
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    url: "https://www.amazon.de/-/en/Deep-Work-Focused-Success-Distracted/dp/0349411905",
    progress: ReadingProgress.Finished,
  },
  {
    title: "Mastery",
    author: "Robert Greene",
    url: "https://www.amazon.de/-/en/dp/B00NTQA1FQ",
    progress: ReadingProgress.Finished,
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    url: "https://www.amazon.de/-/en/Atomic-Habits-life-changing-million-bestseller/dp/1847941834",
    progress: ReadingProgress.Finished,
  },
  {
    title: "Mindset",
    author: "Carol S. Dweck",
    url: "https://www.amazon.com/Mindset-Updated-Changing-Fulfil-Potential/dp/147213995X",
    progress: ReadingProgress.NotStarted,
  },
  {
    title: "The Talent Code",
    author: "Daniel Coyle",
    url: "https://www.amazon.com/Talent-Code-Greatness-Born-Grown/dp/055338533X/",
    progress: ReadingProgress.NotStarted,
  },
  {
    title: "So Good They Can't Ignore You",
    author: "Cal Newport",
    url: "https://www.amazon.de/Good-They-Cant-Ignore-You/dp/1455509124",
    progress: ReadingProgress.NotStarted,
  },
  {
    title: "Thinking in Systems",
    author: "Donella H. Meadows",
    url: "https://www.amazon.de/-/en/Thinking-Systems-Primer-Diana-Wright/dp/1603580557",
    progress: ReadingProgress.NotStarted,
  },
];
