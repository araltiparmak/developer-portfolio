import { Projects } from "./sections/Projects.tsx";
import { ReadingList } from "./sections/ReadingList.tsx";
import { MySetup } from "./sections/MySetup.tsx";
import { Footer } from "./Footer.tsx";
import { useNavigationStore } from "./hooks/useNavigationStore.ts";
import { Header } from "./Header.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { TechStack } from "./sections/TechStack.tsx";
import { MindDump } from "./sections/MindDump.tsx";
import { Ignore } from "./sections/Ignore.tsx";

type SectionMap = {
  [key: string]: React.ReactElement;
};

const App = () => {
  const { activeSection } = useNavigationStore();

  const sectionsMap: SectionMap = {
    projects: <Projects />,
    mySetup: <MySetup />,
    reading: <ReadingList />,
    techStack: <TechStack />,
    mindDump: <MindDump />,
    ignore: <Ignore />,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 font-sans text-gray-800 w-full">
          <Navigation />
          <div className="mt-4 sm:mt-6 overflow-x-hidden">
            {sectionsMap[activeSection]}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
