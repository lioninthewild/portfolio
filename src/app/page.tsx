import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";

export default function Home() {
  return (
    <main className="pt-12 pb-20">
      <Hero />
      <About />
    </main>
  );
}