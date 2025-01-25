import { Projects } from "./components/sections/Projects.tsx";
import { ReadingList } from "./components/sections/ReadingList.tsx";
import { MySetup } from "./components/sections/MySetup.tsx";
import { Footer } from "./components/Footer.tsx";
import { useNavigationStore } from "./hooks/useNavigationStore.ts";
import { Header } from "./components/Header.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { About } from "./components/sections/About.tsx";
import { TechStack } from "./components/sections/TechStack.tsx";

type SectionMap = {
  [key: string]: React.ReactElement;
};

const App = () => {
  const { activeSection } = useNavigationStore();

  const sectionMap: SectionMap = {
    projects: <Projects />,
    mySetup: <MySetup />,
    reading: <ReadingList />,
    about: <About />,
    techStack: <TechStack />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 flex-1">
        <Header />

        <Navigation />

        {sectionMap[activeSection]}
      </div>
      <Footer />
    </div>
  );
};

export default App;
