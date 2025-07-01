import { StepProps } from './types';

export const Step = ({ icon, title, description }: StepProps) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

interface HowItWorksSectionProps {
  steps?: StepProps[];
}

const defaultSteps: StepProps[] = [
  {
    icon: "🧬",
    title: "Upload Sequence",
    description: "Paste or upload a FASTA file to get started."
  },
  {
    icon: "⚙️",
    title: "Run Prediction",
    description: "AI models fold your protein with confidence scores."
  },
  {
    icon: "📊",
    title: "Analyze & Share",
    description: "View structures, run mutation scans, and export results."
  }
];

export const HowItWorksSection = ({ steps = defaultSteps }: HowItWorksSectionProps) => {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-12">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </div>
    </section>
  );
};
