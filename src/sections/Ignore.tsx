import { SectionTitle } from "../components/atoms/SectionTitle.tsx";

export const Ignore = () => {
  return (
    <section>
      <SectionTitle title=".ignore" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
    </section>
  );
};
