import { FeatureItem } from './types';
import { CheckIcon } from '@heroicons/react/24/solid';

interface FeaturesSectionProps {
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  { text: "Real-time folding + mutation scanning", icon: "✅" },
  { text: "Downloadable CSV reports & confidence maps", icon: "✅" },
  { text: "Team collaboration & version history", icon: "✅" },
  { text: "Ligand Docking Support", icon: "✅" },
  { text: "Multi-chain / Complex predictions", icon: "✅" },
  { text: "HIPAA-ready infrastructure", icon: "✅" }
];

export const FeaturesSection = ({ features = defaultFeatures }: FeaturesSectionProps) => {
  return (
    <section className="py-20 px-6 bg-black">
      <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <CheckIcon className="w-5 h-5 text-green-400 flex-shrink-0" />
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
