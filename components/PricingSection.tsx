import { PricingPlan } from './types';

interface PricingCardProps extends PricingPlan {
  onButtonClick?: () => void;
}

const PricingCard = ({ 
  name, 
  description, 
  price, 
  buttonText, 
  buttonStyle, 
  isPopular, 
  onButtonClick 
}: PricingCardProps) => {
  return (
    <div className={`
      bg-white text-black p-6 rounded-lg w-80 relative
      ${isPopular ? 'border-2 border-blue-500' : ''}
    `}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 text-sm rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="mb-4 text-gray-600">{description}</p>
      <p className="text-2xl font-bold mb-4">{price}</p>
      <button 
        className={`px-4 py-2 rounded transition-colors ${buttonStyle}`}
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

interface PricingSectionProps {
  plans?: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Free",
    description: "Basic folding and analysis",
    price: "$0/mo",
    buttonText: "Start",
    buttonStyle: "bg-black text-white hover:bg-gray-800"
  },
  {
    name: "Pro",
    description: "Advanced tools + team support",
    price: "$99/mo",
    buttonText: "Upgrade",
    buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
    isPopular: true
  }
];

export const PricingSection = ({ 
  plans = defaultPlans, 
  onPlanSelect 
}: PricingSectionProps) => {
  return (
    <section className="py-20 px-6 bg-black text-center">
      <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
      <p className="text-gray-400 mb-12">Get a custom quote tailored to your needs</p>
      <div className="flex justify-center">
        <div className="bg-white text-black p-8 rounded-lg w-96 relative border-2 border-blue-500">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 text-sm rounded-full">
              Custom Solution
            </span>
          </div>
          <h3 className="font-bold text-2xl mb-4">Enterprise</h3>
          <p className="mb-6 text-gray-600">Tailored pricing for your organization's needs</p>
          <p className="text-2xl font-bold mb-6">Contact us for pricing!</p>
          <button 
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded transition-colors w-full font-semibold"
            onClick={() => onPlanSelect?.('Enterprise')}
          >
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};
