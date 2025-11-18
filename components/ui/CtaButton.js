export default function CtaButton({ children, variant = "primary", onClick, href }) {
  const className = variant === "primary" ? "btn btn-primary" : "btn btn-outline";
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

