import { Projects } from "./components/sections/Projects.tsx";
import { ReadingList } from "./components/sections/ReadingList.tsx";
import { MySetup } from "./components/sections/MySetup.tsx";
import { Footer } from "./components/Footer.tsx";
import { useNavigationStore } from "./hooks/useNavigationStore.ts";
import { Header } from "./components/Header.tsx";
import { Navigation } from "./components/Navigation.tsx";
import { About } from "./components/sections/About.tsx";

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
  };

  return (
    <div className="max-w-4xl mx-auto p-6 font-sans text-gray-800">
      <Header />

      <Navigation />

      {sectionMap[activeSection]}

      <Footer />
    </div>
  );
};

export default App;
