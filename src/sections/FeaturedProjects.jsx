import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import ProjectCard from "../components/projects/ProjectCard";
import projects from "../data/projects";

function FeaturedProjects() {
  return (
    <Section id="projects">
      <Container>
        {/* Section header */}
        <div className="mb-6 sm:mb-10 text-center">
          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-subtitle mx-auto mt-3 max-w-2xl">
            A selection of real-world projects demonstrating my experience
            across e-commerce, fintech, crypto, and SaaS applications.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid grid-cols-1
            gap-4 sm:gap-5 md:grid-cols-2 md:gap-6
            lg:grid-cols-4
          "
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FeaturedProjects;
