import { GiCookie } from 'react-icons/gi';
import { FaLeaf, FaShippingFast } from 'react-icons/fa';

const icons = {
  GiCookie: GiCookie,
  FaLeaf: FaLeaf,
  FaShippingFast: FaShippingFast
};

export default function FeatureCard({ icon = "GiCookie", title, description }) {
  const Icon = icons[icon] || GiCookie;
  return (
    <div className="card flex flex-col items-start gap-4">
      <div className="p-3 rounded-xl bg-[var(--brand)]/10">
        <Icon size={28} className="text-[var(--brand-dark)] dark:text-[var(--brand)]" />
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-sm text-muted-600">{description}</p>
    </div>
  );
}

