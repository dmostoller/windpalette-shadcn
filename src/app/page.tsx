import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Newsletter from "@/components/newsletter";
import Charts from "@/components/charts";
import ComponentGallery from "@/components/component-gallery";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background mx-auto">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Charts />
      <ComponentGallery />
      <Footer />
    </main>
  );
}
