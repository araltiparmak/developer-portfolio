import { projects } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Link } from "../atoms/Link.tsx";
import { Card } from "../atoms/Card.tsx";

export const Projects = () => {
  return (
    <section>
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols gap-6">
        {projects.map((project) => (
          <Card key={project.title.trim()}>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-sm px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <br />
            <Link url={project.sourceCode} text={"GitHub"} />
            <br /> <br />
            {project.url && <Link url={project.url} text={"Live Demo"} />}
          </Card>
        ))}
      </div>
    </section>
  );
};
