import Classes from "./components/Classes";
import ContactSection from "./components/Contact";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />

      <Intro />

      <Classes />

      {/* <Faq /> */}

      {/* <ContactSection /> */}
    </main>
  );
}
