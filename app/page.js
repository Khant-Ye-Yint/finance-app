import PageHeader from '@/components/page-header';
import FAQ from './components/faq';
import Hero from './components/hero';
import Stats from './components/stats';
import Footer from '@/components/footer';

const HomePage = () => {
  return (
    <main>
      <PageHeader />
      <Hero />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  );
};

export default HomePage;
