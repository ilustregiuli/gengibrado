export default function TestimonialCard({ name, role, rating = 5, text }) {
  return (
    <div className="card">
      <div className="flex items-center gap-4 mb-4">
        <div className="h-12 w-12 rounded-full bg-[var(--brand)] flex items-center justify-center text-white font-bold">{name.charAt(0)}</div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-xs text-muted-600">{role}</div>
        </div>
      </div>
      <p className="text-sm mb-3">"{text}"</p>
      <div className="text-sm text-yellow-500">{"★".repeat(rating)}{"☆".repeat(5 - rating)}</div>
    </div>
  );
}

