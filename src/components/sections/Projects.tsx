import { projects } from "../../data/DB.ts";
import { SectionTitle } from "../atoms/SectionTitle.tsx";
import { Link } from "../atoms/Link.tsx";

export const Projects = () => {
  return (
    <section>
      <SectionTitle title="Projects" />

      <div className="grid md:grid-cols gap-6">
        {projects.map((project) => (
          <div
            key={project.title.trim()}
            className="justify-between items-center p-4 bg-gray-50 rounded-lg"
          >
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

            {project.url && <Link url={project.url} text={"Live Demo"} />}
            <br />
            <br />
            <Link url={project.sourceCode} text={"GitHub"} />
          </div>
        ))}
      </div>
    </section>
  );
};
