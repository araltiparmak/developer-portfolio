import { name, title, links } from "../data/DB.ts";
import { Link } from "./atoms/Link.tsx";

export const Header = () => {
  return (
    <header className="mb-12 text-center">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-xl text-gray-600">{title}</p>
      <Links />
    </header>
  );
};

const Links = () => {
  return (
    <>
      {links.map((link) => (
        <>
          <Link key={link.url} url={link.url} text={link.title} />

          <br />
        </>
      ))}
    </>
  );
};
