import React from 'react';

interface HeaderProps {
  companyName: string;
  onSignIn?: () => void;
  onSignUp?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  companyName, 
  onSignIn, 
  onSignUp 
}) => {
  return (
    <header className="w-full bg-black border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo/Company Name */}
        <div className="text-xl font-bold text-white">
          {companyName}
        </div>
        
        {/* Sign In/Sign Up Buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onSignIn}
            className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium"
          >
            Sign In
          </button>
          <button
            onClick={onSignUp}
            className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};
