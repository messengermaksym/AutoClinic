import { useState } from 'react';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Advantages from './components/sections/Advantages';
import Services from './components/sections/Services';
import Payment from './components/sections/Payment';
import Footer from './components/layout/Footer';
import LeadModal from './components/ui/LeadModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenModal = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(undefined);
  };

  return (
    <>
      <Header />
      <main>
        <Hero onOpenModal={() => handleOpenModal()} />
        <Advantages />
        <Services onOpenModal={handleOpenModal} />
        <Payment />
      </main>
      <Footer onOpenModal={() => handleOpenModal()} />
      <LeadModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        serviceName={selectedService} 
      />
    </>
  );
}

export default App;
