import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import Bento from "@/components/Bento";
import { Fees, Security, HowItWorks, Referral } from "@/components/Sections";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="relative z-[2]">
        <Nav />
        <Hero />
        <Ticker />
        <Bento />
        <Fees />
        <Security />
        <HowItWorks />
        <Referral />
        <Faq />
        <Footer />
      </div>
    </main>
  );
}
