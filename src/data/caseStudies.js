import RicherPalaceCaseStudy from "../assets/richerpalacecasestudy.png"
import KedarWatchesCaseStudy from "../assets/kedarwatchescasestudy.png"


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
