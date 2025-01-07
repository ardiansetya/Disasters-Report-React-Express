import Features from "../components/Features";
import Footer from "../components/Footer";
import HeaderLandingPage from "../components/HeaderLandingPage";
import Hero from "../components/Hero";

const LandingPage = () => {
   
     console.log(import.meta.env);
   
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex flex-col">
      <HeaderLandingPage />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
};

export default LandingPage;
