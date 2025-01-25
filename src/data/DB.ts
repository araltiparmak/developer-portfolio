//Projects
export const projects = [
  {
    title: "Developer Portfolio App",
    description: "",
    tech: ["React", "TypeScript", "Vite", "Tailwind"],
    sourceCode: "https://github.com/araltiparmak/developer-portfolio",
    url: "http://araltiparmak-developer-portfolio.s3-website.eu-central-1.amazonaws.com",
  },
  {
    title: "Diction Exercises App",
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
enum ReadingStatus {
  NotStarted,
  Reading,
  Completed,
}

type ReadingListItem = {
  title: string;
  author: string;
  status: ReadingStatus;
};

export const readingList: ReadingListItem[] = [
  {
    title: "Book 1",
    author: "Author 1",
    status: ReadingStatus.Reading,
  },
];

//My Setup
export const setupItems = [
  { title: "MacBook Pro M3, 16', 36GB", url: "" },
  {
    title: "MSI MAG 274UPFDE, 27'",
    url: "https://www.msi.com/Monitor/MAG-274UPF",
  },
  { title: "CalDigit TS3 Plus", url: "https://www.caldigit.com/ts3-plus" },
];

//Header
export const name = "Ali Rıza Altıparmak";
export const title = "Senior Software Engineer";
export const links = [
  { title: "LinkedIn", url: "https://www.linkedin.com/in/araltiparmak/" },
  { title: "GitHub", url: "https://github.com/araltiparmak/" },
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
