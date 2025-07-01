import { ProteinViewer } from './ProteinViewer';

interface HeroSectionProps {
  onDemoClick?: () => void;
}

export const HeroSection = ({ onDemoClick }: HeroSectionProps) => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4">
      {/* FoldForever Banner */}
      <div className="mb-8 p-12 w-screen bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg border-y border-blue-400/30">
        <div className="flex items-center justify-start max-w-7xl mx-auto">
          <h1 className="text-6xl font-light text-white tracking-widest font-mono uppercase">
            FoldForever
          </h1>
        </div>
      </div>
      
      {/* Main Content - Side by Side Layout */}
      <div className="flex items-center justify-center w-full max-w-7xl mx-auto px-8 gap-12">
        {/* Left Side - Text Content */}
        <div className="flex-1 text-left">
          <h1 className="text-5xl font-bold mb-4">
            Predict Protein Structures in Seconds
          </h1>
          <p className="text-lg max-w-xl mb-6">
            Our AI-powered platform helps researchers accelerate drug discovery with real-time folding and mutation analysis.
          </p>
          <button 
            className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
            onClick={onDemoClick}
          >
            Try Demo
          </button>
        </div>
        
        {/* Right Side - 3D Viewer */}
        <div className="flex-1">
          <ProteinViewer />
        </div>
      </div>
    </section>
  );
};
