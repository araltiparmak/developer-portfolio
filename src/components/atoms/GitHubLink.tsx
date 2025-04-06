import { Link } from "./Link.tsx";

export const GitHubLink = ({ url }: { url: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <Link label={"View on GitHub"} icon={"github.svg"} url={url} />
    </div>
  );
};
