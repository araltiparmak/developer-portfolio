import { Projects } from "./pages/Projects.tsx";
import { ReadingList } from "./pages/ReadingList.tsx";
import { MySetup } from "./pages/MySetup.tsx";
import { Footer } from "./pages/sections/Footer.tsx";
import { useNavigationStore } from "./hooks/useNavigationStore.ts";
import { Header } from "./pages/sections/Header.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { About } from "./pages/About.tsx";
import { TechStack } from "./pages/TechStack.tsx";

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
    <>
      <Header />
      <div className=" min-h-screen flex flex-col justify-center">
        <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800 flex-1">
          <Navigation />

          {sectionMap[activeSection]}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
