//Projects
//TODO: Add description
export const projects = [
  {
    title: "Developer Portfolio App (Under development 🛠️)",
    description: "",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "S3",
      "CloudFront",
      "GitHub Actions",
    ],
    sourceCode: "https://github.com/araltiparmak/developer-portfolio",
  },
  {
    title: "Diction Exercises Android App",
    description: "",
    tech: ["Kotlin", "Firebase"],
    sourceCode: "https://github.com/araltiparmak/diction-exercises-android",
    url: "",
  },
];

//Tech Stack
export const techStack = {
  languages: {
    items: ["Java", "JavaScript", "TypeScript", "Bash"],
    icon: "Code",
  },
  frameworks: {
    items: ["Spring Boot", "React", "React Native"],
    icon: "Boxes",
  },
  devOps: {
    items: ["GitHub Actions", "AWS", "SonarCloud"],
    icon: "FolderGit2",
  },
  tools: {
    items: ["IntelliJ IDEA", "VS Code", "Notion", "Figma"],
    icon: "Settings",
  },
  utilities: { items: ["Alfred", "Fluor", "Iterm2"], icon: "Wrench" },
};

//Reading List
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

//My Setup
export const setupItems = [
  {
    title: "Workstation",
    specs: ["MacBook Pro M3", "16-inch Display", "36GB RAM"],
    url: "",
    icon: "Laptop",
  },
  {
    title: "Monitor",
    specs: [
      "MSI MAG 274UPFDE",
      "27-inch Display",
      "4K Resolution",
      "144Hz Refresh Rate",
    ],
    url: "https://www.msi.com/Monitor/MAG-274UPF",
    icon: "Monitor",
  },
  {
    title: "Docking Station",
    specs: ["CalDigit TS3 Plus"],
    url: "https://www.caldigit.com/ts3-plus",
    icon: "Box",
  },
];

//Header
export type Link = {
  url: string;
  label: string;
  icon?: string;
};
export const name = "Ali Rıza Altıparmak";
export const title = "Senior Software Engineer";
export const links: Link[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/araltiparmak/",
    icon: "linkedin.png",
  },
  {
    label: "GitHub",
    url: "https://github.com/araltiparmak/",
    icon: "github.svg",
  },
];

//Footer
const buildWith = "React & Tailwind CSS";
export const footerText = `© ${new Date().getFullYear()}. Built with ${buildWith}.`;

//About
export const aboutText = [
  "Digital craftsman specializing in elegant web solutions.",
  "Committed to creating streamlined, efficient, and intuitive applications with meticulous attention to details.",
];

//Navigation
export const navigationItems = [
  { key: "projects", label: "Projects" },
  { key: "techStack", label: "Tech Stack" },
  { key: "mySetup", label: "My Setup" },
  { key: "reading", label: "Reading List" },
];
