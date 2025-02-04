import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Nosotros from "./components/Nosotros";
import Story from "./components/Story";
import ModelosSlider from "./components/ModelosSlider";
import Contacto from "./components/Contacto";
import Map from './components/Map'
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Nosotros />
      <Story />
      <ModelosSlider />
      <Contacto />
      <Map />
      <Footer />
    </div>
  );
}
