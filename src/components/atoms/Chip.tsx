export const Chip = ({ text }: { text: string }) => (
  <div
    className={`rounded-md  py-0.5 px-2.5 border border-transparent text-sm transition-all shadow-sm ${getRandomColor()}`}
  >
    {text}
  </div>
);

const colorPairs = [
  "bg-blue-100 text-blue-700",
  "bg-yellow-100 text-yellow-700",
  "bg-green-100 text-green-700",
  "bg-indigo-100 text-indigo-700",
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-red-100 text-red-700",
  "bg-cyan-100 text-cyan-700",
  "bg-emerald-100 text-emerald-700",
  "bg-violet-100 text-violet-700",
  "bg-fuchsia-100 text-fuchsia-700",
  "bg-orange-100 text-orange-700",
] as const;

const getRandomColor = (): string => {
  return colorPairs[Math.floor(Math.random() * colorPairs.length)];
};
