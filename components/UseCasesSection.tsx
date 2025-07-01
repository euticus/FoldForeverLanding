import { UseCaseProps } from './types';

export const UseCase = ({ icon, title }: UseCaseProps) => {
  return (
    <div className="p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

interface UseCasesSectionProps {
  useCases?: UseCaseProps[];
}

const defaultUseCases: UseCaseProps[] = [
  { title: "Biotech Startups", icon: "🔬" },
  { title: "Pharma R&D", icon: "💊" },
  { title: "Academics & Students", icon: "🎓" }
];

export const UseCasesSection = ({ useCases = defaultUseCases }: UseCasesSectionProps) => {
  return (
    <section className="py-20 bg-gray-800 text-white text-center">
      <h2 className="text-3xl font-bold mb-12">Who Is This For?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {useCases.map((useCase, index) => (
          <UseCase key={index} {...useCase} />
        ))}
      </div>
    </section>
  );
};
