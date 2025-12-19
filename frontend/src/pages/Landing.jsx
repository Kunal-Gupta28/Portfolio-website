import Hero from "../components/Landing page/Hero";
import Intro from "../components/Landing page/Intro";
import Footer from "../components/Landing page/Footer"
import SmoothScroll from "../components/SmoothScroll";

export default function Landing() {
  return (
    <SmoothScroll>
      <main>
        <Hero />
        <Intro />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
