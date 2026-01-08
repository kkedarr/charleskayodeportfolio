const AnimatedDivider = () => {
  return (
    <div className="relative mx-auto my-10 h-px w-40 overflow-hidden bg-border-light dark:bg-border-dark">
      <span className="
        absolute inset-0
        origin-left scale-x-0
        bg-primary
        animate-divider
      " />
    </div>
  );
}

export default  AnimatedDivider;
