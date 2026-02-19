import RicherPalaceCaseStudy from "../assets/richerpalacecasestudy.png"
import KedarWatchesCaseStudy from "../assets/kedarwatchescasestudy.png"
import TradeHavenCaseStudy from "../assets/tradehavencasestudyimage.png"


const caseStudies = [
  
  {
    title: "Kedar Watches – Full-Stack E-commerce Platform",
    image: KedarWatchesCaseStudy,
    problem:
      "Kedar Watches required a custom-built e-commerce platform tailored to its brand and operational needs. The business needed more than a static storefront—it required a system capable of handling a growing watch catalog, supporting mobile-heavy traffic, managing product updates internally, and maintaining fast, reliable performance. Existing off-the-shelf solutions were either too restrictive in customization or introduced unnecessary overhead for a lean retail operation.",
    architecture:
      "The platform was designed and built using React and Vite to ensure a fast development workflow and optimized client-side performance, with Tailwind CSS used to implement a clean, responsive, and consistent UI across devices. The storefront includes dynamic product listings, individual product detail pages, a persistent shopping cart, and a structured checkout flow designed to minimize friction during purchase. Cart state is managed client-side and preserved across navigation and refreshes to provide predictable behavior throughout the shopping experience.\n\nSupabase serves as the backend infrastructure, handling product data storage, image asset management, and authentication. Product information such as names, prices, descriptions, images, and availability is stored in Supabase tables and fetched dynamically by the frontend. An internal admin dashboard was built alongside the storefront, providing full CRUD functionality that allows authorized users to create new products, update existing products, and remove discontinued items without redeploying the application. Changes made in the admin interface are persisted directly to Supabase and reflected immediately on the live website.\n\nThe frontend architecture emphasizes separation of concerns through reusable components, shared product schemas, and centralized state management for cart and product data. Routes are lazy-loaded where appropriate to reduce initial load time, and data fetching is optimized to avoid unnecessary requests. Authentication is used to restrict access to administrative functionality, ensuring that only authorized users can manage the product catalog.",
    impact:
      "The completed platform delivers a production-ready e-commerce system that supports the full commercial lifecycle—from product discovery and detailed viewing to cart management and checkout—while empowering the business to manage its inventory independently. Operational overhead is reduced by eliminating manual code changes for product updates, and the site maintains strong performance and usability across devices. The architecture provides a solid foundation for future expansion, including payment processing, order management, analytics, and additional customer-facing features as the Kedar Watches brand continues to grow.",
    link: null,
  },

  {
    title: "TradeHaven – Crypto Alpha Platform",
    image: TradeHavenCaseStudy,

    problem:
      "Crypto trading communities are saturated with unverified signals, anonymous opinions, and low-accountability participation. Traders can make bold claims without consequences, leading to noise, misinformation, and reduced trust. There was a need for a system where visibility is earned through accuracy, and credibility is tied directly to measurable performance.",

    architecture:
      "TradeHaven was designed as a frontend-heavy web application focused on structuring trading data, tracking outcomes, and reflecting performance through a dynamic reputation layer. Users submit trade calls defined by entry price, target, and time window. Each call is evaluated against real market conditions to determine success or failure.\n\nA core system tracks trader performance over time and computes a credibility score that evolves based on outcomes. This score directly influences visibility, ensuring that consistently accurate traders gain prominence while poor performers lose reach. The UI is structured to surface high-signal content first, reducing noise and improving decision-making for users.\n\nThe platform architecture emphasizes modular state management for trade tracking, user scoring, and feed ranking. Reusable components were built for trade cards, performance indicators, and reputation badges. The system is designed to integrate with Web3-based identity or reputation layers such as Ethos, allowing credibility to extend beyond the platform.\n\nAdditional mechanisms such as reputation-weighted endorsements and gated posting permissions were considered to further strengthen content quality and prevent spam. These features transform the platform from a simple feed into a credibility-driven network.",

    impact:
      "TradeHaven introduces accountability into crypto signal sharing by tying visibility to verified performance. This shifts the platform from opinion-driven noise to data-backed credibility, encouraging higher-quality participation. Traders are incentivized to be accurate rather than loud, resulting in a more trustworthy and efficient discovery environment.\n\nThe system demonstrates how reputation can function as both a ranking mechanism and an access control layer, a concept that can extend to broader Web3 and financial applications. By aligning incentives with performance, TradeHaven creates a foundation for scalable, trust-driven communities.",

    link: null,
  },



  {
    title: "Richer Palace Dry Cleaning — Conversion-Focused Business Website",
    image: RicherPalaceCaseStudy,
    problem:
      "Richer Palace Dry Cleaning needed a modern website that could clearly communicate its services, pricing, and value proposition while making it easy for customers to get in touch. The existing online presence suffered from slow load times, weak mobile support, and unclear call-to-action paths, which reduced customer trust and led to missed inquiries, especially from mobile users.",
    architecture:
      "The website was designed and built as a mobile-first React application, with a strong focus on clarity, performance, and conversion. The layout is structured around clear service sections, transparent pricing, customer testimonials, and prominent contact and inquiry flows. Tailwind CSS was used to implement a consistent design system and responsive layouts across screen sizes. Reusable UI components were created to keep the codebase maintainable and allow future content updates without structural changes. Performance optimizations such as image compression, lazy loading, and efficient asset bundling were applied to reduce initial load time. SEO-friendly metadata, semantic HTML, and accessibility best practices were incorporated to improve search visibility and usability.",
    impact:
      "The completed website delivers a fast, professional online presence that improves mobile usability and guides visitors toward meaningful actions. Clearer service presentation and streamlined contact flows increased user engagement and reduced friction for customer inquiries. The site strengthens brand credibility, supports customer acquisition, and provides a scalable foundation for future updates such as online booking or service expansion.",
    link: null,
  },


];

export default caseStudies;


{/*{
    title: "Optimizing Real-Time Cryptocurrency Dashboards",
    image: CryptoGlanceCaseStudy,
    problem:
      "Real-time crypto price updates caused frequent re-renders, UI lag, and inconsistent performance on low-end devices.",
    architecture:
      "Implemented efficient state updates, memoized components, optimized API polling intervals, and component-level lazy loading to reduce unnecessary renders.",
    impact:
      "Improved render performance during live updates and delivered a smooth, responsive dashboard experience across devices.",
    link: null,
  },*/}
