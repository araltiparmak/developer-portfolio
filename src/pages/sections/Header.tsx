import { links, name, title } from "../../data/DB.ts";
import { Link } from "../../components/atoms/Link.tsx";

export const Header = () => {
  return (
    <header className="bg-slate-50 px-12 py-16 justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-indigo-600">{name}</h1>
        <p className="text-2xl text-gray-600 mt-2">{title}</p>
        <SocialLinks />
      </div>
    </header>
  );
};

const SocialLinks = () => {
  return (
    <div className=" space-x-8 mt-4">
      {links.map((link) => (
        <Link
          key={link.url}
          url={link.url}
          label={link.label}
          icon={link.icon}
        />
      ))}
    </div>
  );
};
