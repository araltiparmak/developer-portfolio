import { SectionTitle } from "../components/atoms/SectionTitle.tsx";
import { Link } from "../components/atoms/Link.tsx";
import { Card } from "../components/atoms/Card.tsx";
import { Chip } from "../components/atoms/Chip.tsx";
import { projects } from "../data/projects.ts";
import ReactMarkdown from "react-markdown";
import { GitHubLink } from "../components/atoms/GitHubLink.tsx";

export const Projects = () => {
  return (
    <section>
      <SectionTitle title=".projects" />

      <div className="grid md:grid-cols gap-6">
        {projects.map((project) => (
          <Card key={project.title.trim()}>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <ul className="list-disc pl-5 mb-4">
              {project.descriptionDetails?.map((detail, index) => (
                <li key={index}>
                  {" "}
                  <ReactMarkdown>{detail}</ReactMarkdown>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Chip key={tech} text={tech} />
              ))}
            </div>
            <br />

            {project.sourceCode && <GitHubLink url={project.sourceCode} />}

            {project.url && <Link url={project.url} label={"Live Demo →"} />}
          </Card>
        ))}
      </div>
    </section>
  );
};
