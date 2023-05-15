import { Outlet } from "react-router-dom";
import MainNavigation from "../Navigate/MainNavigate";
import Footer from "../Footer/Footer";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="container p-0">
        <Outlet />
      </main>
      <footer className="bg-dark p-5">
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
