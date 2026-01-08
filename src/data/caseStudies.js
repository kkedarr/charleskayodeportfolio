import CryptoGlanceCaseStudy from "../assets/cryptoglancecasestudy.png"
import KedarWatchesCaseStudy from "../assets/kedarwatchescasestudy.png"


const caseStudies = [
  {
    title: "Optimizing Real-Time Cryptocurrency Dashboards",
    image: CryptoGlanceCaseStudy,
    problem:
      "Real-time crypto price updates caused frequent re-renders, UI lag, and inconsistent performance on low-end devices.",
    architecture:
      "Implemented efficient state updates, memoized components, optimized API polling intervals, and component-level lazy loading to reduce unnecessary renders.",
    impact:
      "Improved render performance during live updates and delivered a smooth, responsive dashboard experience across devices.",
    link: null,
  },
  {
    title: "Building a Scalable E-commerce Frontend System",
    image: KedarWatchesCaseStudy,
    problem:
      "The business required a fast, mobile-friendly storefront with product management, cart logic, secure checkout, and admin workflows.",
    architecture:
      "Designed a modular React architecture with reusable components, REST API integration, and lazy-loaded routes for performance optimization.",
    impact:
      "Delivered a production-ready e-commerce platform with clean UX flows, strong performance, and scalability for future features.",
    link: null,
  },
];

export default caseStudies;
