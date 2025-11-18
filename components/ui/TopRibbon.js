import { useState, useEffect } from 'react';

export default function TopRibbon({ message, closeable = true }) {
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    const key = 'topRibbonClosed';
    const stored = localStorage.getItem(key);
    if (stored === '1') setClosed(true);
  }, []);

  function close() {
    setClosed(true);
    localStorage.setItem('topRibbonClosed', '1');
  }

  if (closed) return null;

  return (
    <div className="w-full bg-[var(--brand)] text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-lg">🍪</span>
          <div className="font-medium">{message}</div>
        </div>
        {closeable && (
          <button onClick={close} className="px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors">Fechar</button>
        )}
      </div>
    </div>
  );
}

