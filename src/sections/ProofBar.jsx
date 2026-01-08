import Section from "../components/layout/Section";
import Container from "../components/layout/Container";

function ProofBar() {
  const items = [
    {
      title: "1+ Years Experience",
      description: "Professional frontend development",
    },
    {
      title: "Production Projects",
      description: "Live apps used by real users",
    },
    {
      title: "Performance & SEO",
      description: "Optimized, fast, accessible UI",
    },
    {
      title: "APIs & Payments",
      description: "REST APIs, fintech integrations",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="card text-center"
            >
              <h3 className="font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProofBar;
