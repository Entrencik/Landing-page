import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import FunFact from "@/components/FunFact";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import ScrollHandler from "@/components/ScrollHandler";
import Feature from "@/components/Features";
import Card2 from "@/components/cards/card2";
import CollegePrediction from "@/components/college-predict";
import RankPrediction from "@/components/rank-predict";


export default function Home() {
  return (
    <main>
      <ScrollHandler />
      <section id="hero">
        <Hero />
      </section>
      <section id="brands">
        <Brands />
      </section>
      <section id="brands">
        <Feature />
      </section>

      <section id="how-we-predict">
       <Card2/>
        <RankPrediction/>
        <CollegePrediction/>
        <FunFact />
        {/* <Integration /> */}
        {/* <CTA /> */}
      </section>
      <section id="faqs">
        <FAQ />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="news">
        <Blog />
      </section>
    </main>
  );
}
