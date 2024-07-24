import Footer from '@/components/footer';
import PageHeader from '@/components/page-header';

const layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main className="min-h-[80vh] ">{children}</main>
      <Footer />
    </>
  );
};

export default layout;
