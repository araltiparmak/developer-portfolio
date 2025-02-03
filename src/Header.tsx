import { links, name, title, welcomeText } from "./data/header.ts";
import { Link } from "./components/atoms/Link.tsx";

export const Header = () => {
  return (
    <header className="bg-slate-50/50 backdrop-blur-sm px-6 py-8 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between">
          <NameTitle />

          <SocialLinks />
        </div>

        <Welcome />
      </div>
    </header>
  );
};

const NameTitle = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        {name}
      </h1>
      <p className="text-[13px] text-gray-500/90 tracking-wide mt-0.5 font-light">
        {title}
      </p>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <Link url={link.url} label={link.label} icon={link.icon} />
      ))}
    </div>
  );
};

const Welcome = () => {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200/80">
      <div className="mb-4">{welcomeText}</div>
    </div>
  );
};
