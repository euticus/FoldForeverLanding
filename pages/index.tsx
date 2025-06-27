import Head from 'next/head';

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">
          Predict Protein Structures in Seconds
        </h1>
        <p className="text-lg max-w-xl mb-6">
          Our AI-powered platform helps researchers accelerate drug discovery with real-time folding and mutation analysis.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200">
          Try Demo
        </button>
        {/* Placeholder for 3D Viewer */}
        <div className="mt-10 w-full max-w-4xl h-96 bg-gray-800 rounded-lg">
          {/* Future: NGL viewer or react-three-fiber rendering */}
          <p className="text-gray-400 pt-36">3D Protein Viewer Coming Soon</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <Step icon="🧬" title="Upload Sequence" description="Paste or upload a FASTA file to get started." />
          <Step icon="⚙️" title="Run Prediction" description="AI models fold your protein with confidence scores." />
          <Step icon="📊" title="Analyze & Share" description="View structures, run mutation scans, and export results." />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-black">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
          <li>✅ Real-time folding + mutation scanning</li>
          <li>✅ Downloadable CSV reports & confidence maps</li>
          <li>✅ Team collaboration & version history</li>
          <li>✅ HIPAA-ready infrastructure</li>
        </ul>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-gray-800 text-white text-center">
        <h2 className="text-3xl font-bold mb-12">Who Is This For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          <UseCase title="Biotech Startups" icon="🔬" />
          <UseCase title="Pharma R&D" icon="💊" />
          <UseCase title="Academics & Students" icon="🎓" />
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-black text-center">
        <h2 className="text-3xl font-bold mb-6">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mb-12">Start free. Scale as you go.</p>
        <PricingTable />
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm bg-gray-900">
        © {new Date().getFullYear()} ProteinApp — Built for Researchers
      </footer>
    </main>
  );
}

// Example step component
function Step({ icon, title, description }: { icon: string; title: string; description: string; }) {
  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function UseCase({ icon, title }: { icon: string; title: string; }) {
  return (
    <div className="p-6 bg-gray-700 rounded-lg">
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function PricingTable() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6">
      <div className="bg-white text-black p-6 rounded-lg w-80">
        <h3 className="font-bold text-xl mb-2">Free</h3>
        <p className="mb-4">Basic folding and analysis</p>
        <p className="text-2xl font-bold mb-4">$0/mo</p>
        <button className="bg-black text-white px-4 py-2 rounded">Start</button>
      </div>
      <div className="bg-white text-black p-6 rounded-lg w-80 border-2 border-blue-500">
        <h3 className="font-bold text-xl mb-2">Pro</h3>
        <p className="mb-4">Advanced tools + team support</p>
        <p className="text-2xl font-bold mb-4">$99/mo</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Upgrade</button>
      </div>
    </div>
  );
}
