/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { CookieBanner } from './components/layout/CookieBanner';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { AnimatedRoutes } from './routes/AnimatedRoutes';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col surface-tier-1 selection:bg-[var(--color-primary)] selection:text-white">
        <Header />
        <main className="flex-grow pt-24">
          <AnimatedRoutes />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}
