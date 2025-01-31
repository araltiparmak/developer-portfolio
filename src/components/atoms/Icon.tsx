import { icons } from "lucide-react";

type LucideIconName = keyof typeof icons;

export const Icon = ({ name, color }: { name: string; color: string }) => {
  const Icon = icons[name as LucideIconName];

  return Icon ? <Icon className={`w-6 h-6 ${color}`} /> : null;
};
