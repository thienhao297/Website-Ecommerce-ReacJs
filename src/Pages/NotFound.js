import Footer from "../Footer/Footer";
import MainNavigation from "../Navigate/MainNavigate";

const NotFoundPage = () => {
  return (
    <>
      <MainNavigation />
      <main className="container bg-light p-0">
        <h1 className="text-center">Page Not Found</h1>
      </main>
      <footer className="bg-dark p-5">
        <Footer />
      </footer>
    </>
  );
};

export default NotFoundPage;
