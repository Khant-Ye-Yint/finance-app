import Footer from '@/components/footer';
import PageHeader from '@/components/page-header';

const layout = ({ children }) => {
  return (
    <main>
      <PageHeader />
      {children}
      <Footer />
    </main>
  );
};

export default layout;
