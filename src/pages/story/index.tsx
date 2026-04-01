import { motion } from 'motion/react';

export const OurStory = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="bg-background text-cream"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-24">
        {/* 1. Hero / Introduction */}
        <section className="flex flex-col items-center justify-center text-center mb-12">
          <h1 className="font-heading text-5xl md:text-7xl text-cream mb-4 tracking-tight font-semibold text-balance">
            Rooted in Wisdom.<br/>
            <span className="italic text-accent">Driven by Future Value.</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted max-w-5xl mx-auto leading-relaxed text-balance">
            FV Partners was born from a desire to bridge the gap between raw data and strategic growth. Founded by a mother-daughter duo from Bashkortostan, our firm leverages a unique blend of generational wisdom and modern strategic thinking.
          </p>
        </section>

        <div className="space-y-24">
          {/* 2. Mother's Story */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="font-heading text-4xl text-cream mb-2 font-medium text-balance">The Foundation and The Wisdom</h2>
              <h3 className="font-ui text-sm uppercase tracking-[0.2em] text-accent mb-6">Farida Adigamova</h3>
              <div className="font-body text-lg leading-relaxed space-y-4">
                <p className="text-cream/90 text-pretty">
                  With decades of experience navigating complex financial landscapes, Farida brings the foundational stability and deep-rooted wisdom that only time can cultivate. 
                </p>
                <p className="text-muted text-pretty">
                  Her approach is grounded in the traditional values of Bashkortostan—emphasizing community, unwavering trust, and treating every client's legacy with the care of family.
                </p>
                <p className="text-muted text-pretty">
                  She understands that true wealth is not just about accumulation, but preservation. Her meticulous attention to detail ensures that the financial infrastructure is pristine, audit-ready, and built to withstand the tests of time.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 w-full max-w-[300px] lg:ml-auto mx-auto aspect-[4/5] bg-surface relative overflow-hidden ring-1 ring-accent/20 shadow-2xl">
              <img 
                src="/farida-adigamova.jpeg" 
                alt="Farida Adigamova, Founder" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            </div>
          </section>

          {/* 3. Daughter's Story */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="w-full max-w-[300px] lg:mr-auto mx-auto aspect-[4/5] bg-surface relative overflow-hidden ring-1 ring-accent/20 text-cream shadow-2xl">
              <img 
                src="/gulnaz-adigamva.jpg" 
                alt="Gulnaz Adigamova, Co-Founder" 
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80"></div>
            </div>
            <div>
              <h2 className="font-heading text-4xl text-cream mb-2 font-medium text-balance">The Strategist and The Future</h2>
              <h3 className="font-ui text-sm uppercase tracking-[0.2em] text-accent mb-10">Gulnaz Adigamova</h3>
              <div className="font-body text-lg leading-relaxed space-y-6">
                <p className="text-cream/90 text-pretty">
                  Building upon the rock-solid foundation laid by her mother, Gulnaz brings modern strategic innovation and forward-looking financial modeling to the firm. 
                </p>
                <p className="text-muted text-pretty">
                  Her expertise lies in transforming pristine data into actionable roadmaps for scaling businesses and high-net-worth individuals.
                </p>
                <p className="text-muted text-pretty">
                  She represents the "Future Value" of FV Partners. By bridging the gap between raw numbers and visionary growth, she ensures that our clients are not just protected, but perfectly positioned to thrive in an ever-evolving economic landscape.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* 4. Final Quote / Philosophy */}
        <section className="mt-32 py-24 border-t border-white/5">
          <div className="max-w-4xl mx-auto border-l-4 border-accent pl-8 md:pl-12 text-left">
            <blockquote className="font-heading text-3xl md:text-5xl italic text-cream leading-tight mb-8 text-balance">
              "Together, we don't just manage your numbers; we nurture the legacy you are building for the next generation. We offer a level of personal care and unity that stands in stark contrast to the often cold, clinical nature of financial services."
            </blockquote>
            <p className="font-ui text-sm uppercase tracking-[0.1em] text-accent">FV Partners Shared Vision</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default OurStory;
