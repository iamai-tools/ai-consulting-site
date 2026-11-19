import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import CtaBand from "../components/CtaBand";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Process />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
