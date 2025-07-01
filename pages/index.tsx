import Head from 'next/head';
import {
  Header,
  HeroSection,
  HowItWorksSection,
  FeaturesSection,
  UseCasesSection,
  PricingSection,
  Footer
} from '../components';
import { useLandingPageHandlers } from '../hooks/useLandingPageHandlers';
import { 
  SITE_CONFIG, 
  HOW_IT_WORKS_STEPS, 
  FEATURES, 
  USE_CASES, 
  PRICING_PLANS 
} from '../lib/constants';

export default function Home() {
  // Custom hook for handling user interactions
  const { handleDemoClick, handlePlanSelect, handleSignIn, handleSignUp } = useLandingPageHandlers();

  return (
    <>
      <Head>
        <title>{SITE_CONFIG.title}</title>
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black text-white font-sans">
        <Header 
          companyName={SITE_CONFIG.name} 
          onSignIn={handleSignIn}
          onSignUp={handleSignUp}
        />
        <HeroSection onDemoClick={handleDemoClick} />
        <HowItWorksSection steps={HOW_IT_WORKS_STEPS} />
        <FeaturesSection features={FEATURES} />
        <UseCasesSection useCases={USE_CASES} />
        <PricingSection onPlanSelect={handlePlanSelect} />
        <Footer companyName={SITE_CONFIG.name} />
      </main>
    </>
  );
}


