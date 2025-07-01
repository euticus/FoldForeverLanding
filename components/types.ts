// Type definitions for the landing page components

export interface StepProps {
  icon: string;
  title: string;
  description: string;
}

export interface UseCaseProps {
  icon: string;
  title: string;
}

export interface PricingPlan {
  name: string;
  description: string;
  price: string;
  buttonText: string;
  buttonStyle: string;
  isPopular?: boolean;
}

export interface FeatureItem {
  text: string;
  icon?: string;
}
