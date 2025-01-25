export const Link = ({ url, text }: { url: string; text: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {text}
  </a>
);
