import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import CaseStudyCard from "../components/casestudies/CaseStudyCard";
import caseStudies from "../data/caseStudies";

function CaseStudyPreviews() {
  return (
    <Section>
      <Container>
        {/* Header */}
        <div className="mb-6 sm:mb-10 text-center">
          <h2 className="section-title">
            Case Study Previews
          </h2>
        </div>

        {/* Grid */}
        <div
          className="
            grid grid-cols-1
            gap-4 sm:gap-5
            md:grid-cols-2 md:gap-8
          "
        >
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.title}
              study={study}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default CaseStudyPreviews;
