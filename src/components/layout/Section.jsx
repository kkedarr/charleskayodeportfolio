function Section({ children, id, className = "" }) {
  return (
    <section
      id={id}
      className={`py-14 md:py-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;
