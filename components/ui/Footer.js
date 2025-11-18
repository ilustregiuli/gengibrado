export default function Footer({ settings }) {
  const business = settings.business;
  return (
    <footer className="bg-white dark:bg-[#0f0f0f] mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-3">
            <div className="flex-shrink-0">
              <img src={business.brandLogo} alt={business.brandName} className="h-10 w-10 rounded-md object-cover block" />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="font-bold leading-tight">{business.brandName}</div>
              <div className="text-sm text-muted-600 leading-tight">{business.brandTagline}</div>
            </div>
          </div>
          <div className="text-sm text-muted-600">{business.address}</div>
        </div>

        <div>
          <div className="font-semibold mb-2">Links</div>
          <ul className="text-sm space-y-2">
            <li><a href="#hero" className="hover:text-[var(--brand)] transition-colors">Home</a></li>
            <li><a href="#pricing" className="hover:text-[var(--brand)] transition-colors">Sabores</a></li>
            <li><a href="#testimonials" className="hover:text-[var(--brand)] transition-colors">Depoimentos</a></li>
            <li><a href="#cta" className="hover:text-[var(--brand)] transition-colors">Pedir</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-2">Contato</div>
          <div className="text-sm mb-2">Email: <a href={`mailto:${business.brandEmail}`} className="hover:text-[var(--brand)] transition-colors">{business.brandEmail}</a></div>
          <div className="text-sm mb-4">WhatsApp: <a href={business.social.whatsapp} className="hover:text-[var(--brand)] transition-colors">{business.brandPhone}</a></div>

          {settings.theme.footer.showNewsletter && (
            <form className="mt-4">
              <label className="text-sm block mb-2">Receba ofertas</label>
              <div className="flex gap-2">
                <input placeholder="seu@email.com" className="flex-1 rounded-lg p-2 border dark:bg-gray-800 dark:border-gray-700" />
                <button className="btn btn-primary">Inscrever</button>
              </div>
            </form>
          )}
        </div>
      </div>

      <div className="border-t dark:border-gray-800 py-4 text-sm text-center text-muted-600">
        {settings.theme.footer.copyright}
      </div>
    </footer>
  );
}

