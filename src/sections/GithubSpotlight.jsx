import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import githubRepos from "../data/githubrepos";

function GithubSpotlight() {
  return (
    <Section>
      <Container>
        <h2 className="section-title text-center">
          GitHub Spotlight
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-muted">
          Explore selected repositories showcasing clean code, reusable
          components, API integration, and maintainable frontend architectures.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {githubRepos.map(repo => (
            <div
              key={repo.name}
              className="rounded-xl border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-6"
            >
              <h3 className="text-lg font-semibold">
                {repo.name}
              </h3>

              <p className="mt-2 text-sm text-muted">
                {repo.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {repo.stack.map(tag => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition hover:bg-primary hover:text-white"
                >
                  View Repository →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default GithubSpotlight;
