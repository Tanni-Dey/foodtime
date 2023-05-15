import "./App.css";
import Navbar from "./components/Header/Navbar/Navbar";
import HeroSection from "./components/Header/HeroSection/HeroSection";
import NextSection from "./components/NextSection/NextSection";

function App() {
  return (
    <>
      <header className="foodtime_header">
        <Navbar />
        <HeroSection />
      </header>
      <NextSection />
    </>
  );
}

export default App;
