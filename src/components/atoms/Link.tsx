export const Link = ({
  url,
  label,
  icon,
  alt,
}: {
  url: string;
  label?: string;
  alt?: string;
  icon?: string;
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-blue-600 hover:text-blue-800 inline-block mt-2"
  >
    {icon && (
      <img src={`${icon}`} alt={alt} className="h-6 w-6 inline-block mr-2" />
    )}
    {label}
  </a>
);
