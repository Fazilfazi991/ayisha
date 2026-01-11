import Header from './components/Header';
import Hero from './sections/Hero';
import Achievements from './sections/Achievements';
import ProblemSolution from './sections/ProblemSolution';
import ServicesOverview from './sections/ServicesOverview';
import OnboardingProcess from './sections/OnboardingProcess';
import MajorClients from './sections/MajorClients';
import Proof from './sections/Proof';
import WhoIWorkWith from './sections/WhoIWorkWith';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';

import WebsitePortfolio from './sections/WebsitePortfolio';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <Achievements />
        <ProblemSolution />
        <WebsitePortfolio />
        <ServicesOverview />
        <OnboardingProcess />
        <MajorClients />
        <Proof />
        <WhoIWorkWith />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
