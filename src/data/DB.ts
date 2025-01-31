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
  { key: "mindDump", label: ".mindDump" },
  { key: "projects", label: ".projects" },
  { key: "techStack", label: ".techStack" },
  { key: "reading", label: ".readingList" },
  { key: "mySetup", label: ".mySetup" },
  { key: "ignore", label: ".ignore" },
];
