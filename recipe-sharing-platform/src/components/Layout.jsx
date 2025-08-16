import {Outlet, useLocation} from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

export default function Layout() {
  const {pathname} = useLocation();
  const showHero = pathname === "/"; // show hero only on the homepage

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {showHero && <HeroSection />}
      <main className="flex-1 max-w-6xl mx-auto p-4 w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
