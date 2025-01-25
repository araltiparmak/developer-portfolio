import { useNavigationStore } from "../hooks/useNavigationStore.ts";
import { navigationItems } from "../data/DB.ts";

export const Navigation = () => {
  const { activeSection, setActiveSection } = useNavigationStore();

  return (
    <nav className="mb-8 flex justify-center space-x-4">
      {navigationItems.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => setActiveSection(key)}
          className={`
              px-4 py-2 rounded transition-colors 
              ${
                activeSection === key
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};
