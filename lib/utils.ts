// Common CSS class utilities and style helpers

export const commonStyles = {
  // Buttons
  primaryButton: 'bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors',
  secondaryButton: 'bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors',
  
  // Sections
  section: 'py-20 px-6',
  sectionTitle: 'text-3xl font-bold text-center mb-12',
  
  // Cards
  card: 'p-6 rounded-lg transition-colors',
  cardHover: 'hover:scale-105 transition-transform',
  
  // Grids
  gridThree: 'grid grid-cols-1 md:grid-cols-3 gap-8',
  gridTwo: 'grid grid-cols-1 md:grid-cols-2 gap-6',
  
  // Containers
  container: 'max-w-6xl mx-auto px-6',
  centeredContainer: 'max-w-4xl mx-auto',
};

// Utility functions
export const utils = {
  // Combine class names conditionally
  cn: (...classes: (string | undefined | false)[]): string => {
    return classes.filter(Boolean).join(' ');
  },
  
  // Format price
  formatPrice: (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  },
  
  // Truncate text
  truncate: (text: string, length: number): string => {
    return text.length > length ? `${text.slice(0, length)}...` : text;
  },
};
