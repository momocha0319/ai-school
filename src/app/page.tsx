import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Courses from "@/components/Courses";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
