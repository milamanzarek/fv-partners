import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Home } from '../pages/home';
import { OurStory } from '../pages/story';
import { Services } from '../pages/services';
import { Insights } from '../pages/insights';
import { Resources } from '../pages/resources';
import { Contact } from '../pages/contact';
import { ThankYou } from '../pages/contact/ThankYou';

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/story" element={<OurStory />} />
          <Route path="/services" element={<Services />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
