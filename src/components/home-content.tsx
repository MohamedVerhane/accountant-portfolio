import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Services } from "@/components/sections/services";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Process } from "@/components/sections/process";
import { LedgerTape } from "@/components/sections/ledger-tape";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Cta } from "@/components/sections/cta";

function HomeContent() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <MarqueeStrip />
        <Services />
        <Stats />
        <About />
        <Process />
        <LedgerTape />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
        <Cta />
      </main>
      <SiteFooter />
    </>
  );
}

export { HomeContent };