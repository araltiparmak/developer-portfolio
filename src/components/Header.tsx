import { name, title, links } from "../data/DB.ts";

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
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {link.title}
          </a>
          <br />
        </>
      ))}
    </>
  );
};
