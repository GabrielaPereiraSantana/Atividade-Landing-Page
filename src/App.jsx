import { useCallback } from 'react';
import { useProductViewModel } from './viewmodels/useProductViewModel';
import { useFAQViewModel } from './viewmodels/useFAQViewModel';
import { usePurchaseViewModel } from './viewmodels/usePurchaseViewModel';

import Header from './views/components/Header/Header';
import Hero from './views/components/Hero/Hero';
import ProductShowcase from './views/components/ProductShowcase/ProductShowcase';
import Benefits from './views/components/Benefits/Benefits';
import HowItWorks from './views/components/HowItWorks/HowItWorks';
import Testimonials from './views/components/Testimonials/Testimonials';
import Pricing from './views/components/Pricing/Pricing';
import FAQ from './views/components/FAQ/FAQ';
import CTA from './views/components/CTA/CTA';
import Footer from './views/components/Footer/Footer';
import Modal from './views/components/Modal/Modal';
import PurchaseForm from './views/components/Modal/PurchaseForm';

function App() {
  const {
    product,
    activeSection,
    navigationItems,
    handleNavigation
  } = useProductViewModel();

  const {
    faqItems,
    isExpanded,
    toggleItem,
    handleKeyDown: handleFAQKeyDown
  } = useFAQViewModel();

  const {
    isModalOpen,
    selectedPlan,
    formData,
    errors,
    submitStatus,
    plans,
    openModal,
    closeModal,
    handleInputChange,
    handleSubmit,
    formatPrice
  } = usePurchaseViewModel();

  const handlePrimaryCTA = useCallback(() => {
    openModal();
  }, [openModal]);

  const handleSecondaryCTA = useCallback(() => {
    handleNavigation('pricing');
  }, [handleNavigation]);

  const handlePricingSelect = useCallback((planId) => {
    openModal(planId);
  }, [openModal]);

  return (
    <>
      <Header
        navigationItems={navigationItems}
        onNavigate={handleNavigation}
        onCTAClick={handlePrimaryCTA}
        activeSection={activeSection}
      />

      <main>
        <Hero
          hero={product.hero}
          onPrimaryCTA={handlePrimaryCTA}
          onSecondaryCTA={handleSecondaryCTA}
        />

        <ProductShowcase
          problem={product.problem}
          solution={product.solution}
          targetAudience={product.targetAudience}
        />

        <Benefits benefits={product.benefits} />

        <HowItWorks steps={product.howItWorks} />

        <Testimonials testimonials={product.testimonials} />

        <Pricing
          plans={product.pricing.plans}
          onSelectPlan={handlePricingSelect}
          formatPrice={formatPrice}
        />

        <FAQ
          faqItems={faqItems}
          isExpanded={isExpanded}
          toggleItem={toggleItem}
          handleKeyDown={handleFAQKeyDown}
        />

        <CTA
          cta={product.cta}
          onPrimaryCTA={handlePrimaryCTA}
          onSecondaryCTA={handleSecondaryCTA}
        />

        <Footer footer={product.footer} />
      </main>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Comece sua jornada Lumina"
        description="Preencha o formulário e nossa equipe entrará em contato em até 24h para agendar a instalação."
        size="md"
      >
        <PurchaseForm
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedPlan={selectedPlan}
          formData={formData}
          errors={errors}
          submitStatus={submitStatus}
          onInputChange={handleInputChange}
          onSubmit={handleSubmit}
          plans={plans}
          formatPrice={formatPrice}
        />
      </Modal>
    </>
  );
}

export default App;