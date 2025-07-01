import { StepProps, UseCaseProps, PricingPlan, FeatureItem } from '../components/types';

// Site configuration
export const SITE_CONFIG = {
  name: 'FoldForever',
  title: 'FoldForever - Predict Protein Structures in Seconds',
  description: 'AI-powered platform for real-time protein folding and mutation analysis. Accelerate drug discovery with our advanced tools.',
  url: 'https://foldforever.com', // Update with actual URL
};

// How It Works steps
export const HOW_IT_WORKS_STEPS: StepProps[] = [
  {
    icon: '🧬',
    title: 'Upload Sequence',
    description: 'Paste or upload a FASTA file to get started.'
  },
  {
    icon: '⚙️',
    title: 'Run Prediction',
    description: 'AI models fold your protein with confidence scores.'
  },
  {
    icon: '📊',
    title: 'Analyze & Share',
    description: 'View structures, run mutation scans, and export results.'
  }
];

// Platform features
export const FEATURES: FeatureItem[] = [
  { text: 'Real-time folding + mutation scanning', icon: '✅' },
  { text: 'Downloadable CSV reports & confidence maps', icon: '✅' },
  { text: 'Team collaboration & version history', icon: '✅' },
  { text: 'Ligand Docking Support', icon: '✅' },
  { text: 'Multi-chain / Complex predictions', icon: '✅' },
  { text: 'HIPAA-ready infrastructure', icon: '✅' }
];

// Target use cases
export const USE_CASES: UseCaseProps[] = [
  { title: 'Biotech Startups', icon: '🔬' },
  { title: 'Pharma R&D', icon: '💊' },
  { title: 'Academics & Students', icon: '🎓' }
];

// Pricing plans
export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Free',
    description: 'Basic folding and analysis',
    price: '$0/mo',
    buttonText: 'Start Free',
    buttonStyle: 'bg-black text-white hover:bg-gray-800'
  },
  {
    name: 'Pro',
    description: 'Advanced tools + team support',
    price: '$99/mo',
    buttonText: 'Upgrade to Pro',
    buttonStyle: 'bg-blue-500 text-white hover:bg-blue-600',
    isPopular: true
  }
];
