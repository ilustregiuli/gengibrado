export default function PricingCard({ name, price, period, features = [], cta, featured = false, image }) {
  return (
    <div className={`rounded-2xl p-6 ${featured ? 'border-2 border-[var(--brand)] shadow-lg' : 'shadow-md'} bg-white dark:bg-gray-800`}>
      {image && <img src={image} alt={name} className="w-full h-40 object-cover rounded-xl mb-4" />}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <div className="text-right">
          <div className="text-2xl font-extrabold">{price}</div>
          <div className="text-xs text-muted-600">{period}</div>
        </div>
      </div>
      <ul className="mb-6 text-sm space-y-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="inline-block mt-1 text-[var(--brand)]">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div>
        <a href="#cta" className="btn btn-primary w-full text-center">{cta}</a>
      </div>
    </div>
  );
}

