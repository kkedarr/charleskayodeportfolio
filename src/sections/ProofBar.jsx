import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { CheckCircle, Zap, BarChart3, CreditCard } from "lucide-react";

function ProofBar() {
  const items = [
    {
      title: "3+ Years Experience",
      description: "Professional frontend engineering across production systems",
      icon: CheckCircle,
    },
    {
      title: "Production Projects",
      description: "Live applications actively used by real customers",
      icon: BarChart3,
    },
    {
      title: "Performance & SEO",
      description: "Fast load times, accessibility compliance, search visibility",
      icon: Zap,
    },
    {
      title: "APIs & Payments",
      description: "REST integrations, fintech workflows, secure data handling",
      icon: CreditCard,
    },
  ];

  return (
    <Section>
      <Container>
        <div
          className="
            grid grid-cols-2 gap-4
            sm:gap-5
            md:grid-cols-4 md:gap-6
          "
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group flex flex-col items-center text-center
                  rounded-xl border border-border-light dark:border-border-dark
                  bg-background-light dark:bg-background-dark
                  p-4 sm:p-5
                  shadow-sm
                  transition-all duration-200
                  hover:-translate-y-1 hover:shadow-md
                "
              >
                {/* Icon */}
                <div
                  className="
                    mb-3 flex h-10 w-10 items-center justify-center
                    rounded-lg
                    bg-primary/10 text-primary
                    transition-transform duration-200
                    group-hover:scale-110
                  "
                >
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-semibold leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs sm:text-sm text-muted-light dark:text-muted-dark leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default ProofBar;
