export const Link = ({
  url,
  label,
  icon,
}: {
  url: string;
  label: string;
  icon?: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    {icon ? (
      <img src={`${icon}`} alt={label} className="h-6 w-6 inline-block mr-2" />
    ) : (
      label
    )}
  </a>
);
