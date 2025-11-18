import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

export default function Layout({ settings, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header settings={settings} />
      <main className="flex-1">{children}</main>
      <Footer settings={settings} />
    </div>
  );
}

