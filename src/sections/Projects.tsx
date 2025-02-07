import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Link } from "../components/atoms/Link.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Chip } from "../components/atoms/Chip.tsx";
import { projects } from "../data/projects.ts";

export const Projects = () => {
  return (
    <section>
      <SectionTitle title=".projects" />

      <div className="grid md:grid-cols gap-6">
        {projects.map((project) => (
          <Card key={project.title.trim()}>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Chip key={tech} text={tech} />
              ))}
            </div>
            <br />
            <Link url={project.sourceCode} label={"GitHub →"} />
            <br /> <br />
            {project.url && <Link url={project.url} label={"Live Demo →"} />}
          </Card>
        ))}
      </div>
    </section>
  );
};
