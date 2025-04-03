import { Project } from "../types.ts";

export const projects: Project[] = [
  {
    title: "Developer Portfolio (Under development 🛠️)",
    description: "This website️.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "S3",
      "CloudFront",
      "Route 53",
      "GitHub Actions",
    ],
    sourceCode: "https://github.com/araltiparmak/developer-portfolio",
  },
  {
    title: "AI-Powered Dynamic UI Generator (Under development 🛠️)",
    description:
      "A serverless system that transforms natural language into functional interfaces",
    descriptionDetails: [
      "**AI Schema Generation:** Node.js Lambda uses Bedrock (Amazon Nova) to convert user prompts into structured JSON form definitions.",
      "**Instant UI Rendering:** Lightweight engine dynamically interprets JSON to generate responsive forms with validation and conditional logic.",
      "**Enterprise-Ready Architecture:** Serverless AWS infrastructure ensures scalability while maintaining low latency.",
    ],
    tech: [
      "Bedrock (Amazon Nova)",
      "Lambda",
      "API Gateway",
      "S3",
      "CloudFront",
      "Route 53",
      "React",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "GitHub Actions",
    ],
    sourceCode: "https://github.com/araltiparmak/developer-portfolio",
    url: "https://ui.araltiparmak.com",
  },
  {
    title: "Diction Exercises React Native Application (Under development 🛠️)",
    description:
      "An Android application focused on diction improvement and practicing tongue twisters.",
    tech: ["React Native", "Tamagui", "Expo", "Cloud Firestore"],
    sourceCode: "https://github.com/araltiparmak/diction",
    url: "",
  },
  {
    title: "Diction Exercises Android Application",
    description:
      "An Android application focused on diction improvement and practicing tongue twisters.",
    tech: ["Kotlin", "Firebase Realtime Database"],
    sourceCode: "https://github.com/araltiparmak/diction-exercises-android",
    url: "",
  },
];
