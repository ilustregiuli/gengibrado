import Layout from '@/components/layout/Layout';
import PageSection from '@/components/ui/PageSection';
import TopRibbon from '@/components/ui/TopRibbon';
import CtaButton from '@/components/ui/CtaButton';
import FeatureCard from '@/components/ui/FeatureCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import PricingCard from '@/components/ui/PricingCard';
import Head from 'next/head';

export default function Home({ settings }) {
  const s = settings.sections;

  return (
    <>
      <Head>
        <title>{settings.general.seoTitle}</title>
        <meta name="description" content={settings.general.seoDescription} />
        <meta property="og:title" content={settings.general.seoTitle} />
        <meta property="og:description" content={settings.general.seoDescription} />
        <meta property="og:image" content={settings.general.openGraphImage} />
        <link rel="icon" href={settings.general.favicon} />
      </Head>
      <Layout settings={settings}>
        {s.topRibbon.enabled && <TopRibbon message={s.topRibbon.message} closeable={s.topRibbon.closeable} />}

        {/* HERO */}
        <PageSection id="hero" bgColor="bg-brand text-[var(--text)]" vPadding="py-24">
          <div className="max-w-7xl mx-auto px-4 md:flex md:items-center md:gap-12">
            <div className="md:w-6/12">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{s.hero.title}</h1>
              <p className="text-lg mb-6">{s.hero.subtitle}</p>
              <div className="flex gap-4 items-center flex-wrap">
                <a href="#pricing" className="btn btn-primary">{s.hero.ctaPrimary}</a>
                <a href="#features" className="btn btn-outline">{s.hero.ctaSecondary}</a>
              </div>

              <div className="flex gap-6 mt-8">
                {s.hero.stats.map((st, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl font-bold">{st.number}</div>
                    <div className="text-sm text-muted-600">{st.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-6/12 mt-8 md:mt-0">
              <img src={s.hero.image} alt="Biscoitos" className="w-full rounded-2xl shadow-lg" />
            </div>
          </div>
        </PageSection>

        {/* ABOUT */}
        <PageSection id="about" title={s.about.title}>
          <div className="md:flex md:items-center md:gap-8">
            <div className="md:w-6/12">
              <p className="prose">{s.about.content}</p>
            </div>
            <div className="md:w-6/12 mt-6 md:mt-0">
              <img src={s.about.image} alt="Nossa Cozinha" className="rounded-2xl shadow-md w-full" />
            </div>
          </div>
        </PageSection>

        {/* FEATURES */}
        <PageSection id="features" title={s.features.title} subtitle={s.features.subtitle}>
          <div className="grid md:grid-cols-3 gap-6">
            {s.features.items.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </PageSection>

        {/* PRICING / SABORES */}
        <PageSection id="pricing" title={s.pricing.title} subtitle={s.pricing.subtitle} bgColor="bg-gray-50 dark:bg-gray-800">
          <div className="grid md:grid-cols-3 gap-6">
            {s.pricing.plans.map((p, i) => (
              <PricingCard key={i} {...p} />
            ))}
          </div>
        </PageSection>

        {/* TESTIMONIALS */}
        <PageSection id="testimonials" title={s.testimonials.title}>
          <div className="grid md:grid-cols-2 gap-6">
            {s.testimonials.items.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </PageSection>

        {/* CTA FINAL */}
        <PageSection id="cta" bgColor="bg-brand text-[var(--text)]" vPadding="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">{s.cta.title}</h2>
            <p className="mb-6">{s.cta.subtitle}</p>
            <a href={settings.business.social.whatsapp} className="btn btn-primary">{s.cta.button}</a>
            <p className="text-sm mt-4 opacity-80">{s.cta.secondaryText}</p>
          </div>
        </PageSection>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const settings = {
    business: require('../content/settings/business.json'),
    general: require('../content/settings/general.json'),
    theme: require('../content/settings/theme.json'),
    sections: require('../content/settings/sections.json')
  };

  return { props: { settings } };
}

