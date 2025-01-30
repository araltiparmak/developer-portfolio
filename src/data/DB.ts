//Projects
export const projects = [
  {
    title: "Developer Portfolio App",
    description: "",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    sourceCode: "https://github.com/araltiparmak/developer-portfolio",
    url: "https://aliriza.dev",
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
  languages: ["Java", "JavaScript", "TypeScript", "Bash"],
  frameworks: ["Spring Boot", "React", "React Native"],
  devOps: ["GitHub Actions", "AWS", "SonarCloud"],
  tools: ["IntelliJ IDEA", "VS Code", "Notion", "Figma"],
  utilities: ["Alfred", "Fluor", "Iterm2"],
};

//Reading List
enum ReadingProgress {
  NotStarted = "Not Started",
  CurrentlyReading = "Currently Reading",
  Finished = "Finished",
}

type ReadingListItem = {
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
const buildWith = "React & Tailwind";
export const footerText = `© ${new Date().getFullYear()}. Built with ${buildWith}.`;

//About
export const aboutText = `Software engineer with expertise in web technologies.
                Focused on creating clean, efficient, and user-friendly applications.`;

//Navigation
export const navigationItems = [
  { key: "about", label: "About Me" },
  { key: "projects", label: "Projects" },
  { key: "techStack", label: "Tech Stack" },
  { key: "mySetup", label: "My Setup" },
  { key: "reading", label: "Reading List" },
];
