export type Link = {
  url: string;
  label?: string;
  alt?: string;
  icon?: string;
};

export const name = "Ali Rıza Altıparmak";
export const title = "Senior Software Engineer";
export const links: Link[] = [
  {
    alt: "LinkedIn",
    url: "https://www.linkedin.com/in/araltiparmak/",
    icon: "linkedin.png",
  },
  {
    alt: "GitHub",
    url: "https://github.com/araltiparmak/",
    icon: "github.svg",
  },
];

export const welcomeText =
  "👋 Welcome to my Workshop - where I craft 🛠️, experiment 🧪, and bring ideas 💡 to life.";
