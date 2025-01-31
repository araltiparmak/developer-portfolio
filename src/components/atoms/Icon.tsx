import { icons } from "lucide-react";
type IconName = keyof typeof icons;

export const Icon = ({ name, color }: { name: IconName; color: string }) => {
  const Icon = icons[name];

  return Icon ? <Icon className={`w-6 h-6 ${color}`} /> : null;
};
