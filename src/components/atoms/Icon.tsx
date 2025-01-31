import {
  Box,
  Code2,
  Laptop,
  Monitor,
  Boxes,
  Wrench,
  FolderGit2,
  Settings,
} from "lucide-react";

export const Icon = ({ name, color }: { name: string; color: string }) => {
  const iconMap = {
    Laptop,
    Monitor,
    Box,
    Code2,
    Boxes,
    Wrench,
    FolderGit2,
    Settings,
  } as const;

  // @ts-ignore
  const IconComponent = iconMap[name];

  return IconComponent ? (
    <IconComponent className={`w-6 h-6 ${color}`} />
  ) : null;
};
