import useDocumentTitle from "../hooks/useDocumentTitle";
import Hero from "../components/Landing page/Hero";
import Intro from "../components/Landing page/Intro";
import Footer from "../components/Footer"

export default function Landing() {
  useDocumentTitle("Kunal Gupta - Software Developer");
  return (
   <>
    <main>
      <Hero />
      <Intro />
    </main>
    <Footer />
  </>
  );
}
