import PageHeader from '@/components/page-header';
const layout = ({ children }) => {
  return (
    <>
      <PageHeader className="my-8" />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default layout;
