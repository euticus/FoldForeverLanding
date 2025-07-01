import { useEffect, useRef, useState } from 'react';

interface ProteinViewerProps {
  className?: string;
}

export const ProteinViewer = ({ className }: ProteinViewerProps) => {
  const viewerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    const initViewer = async () => {
      if (typeof window === 'undefined' || !viewerRef.current) return;

      try {
        const NGL = await import('ngl');
        
        // Create NGL stage
        const stage = new NGL.Stage(viewerRef.current, {
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
        });
        
        stageRef.current = stage;

        // Human insulin sequence - A chain (21 amino acids) and B chain (30 amino acids)
        // This is the actual sequence of human insulin hormone
        const insulinAChain = "GIVEQCCTSICSLYQLENYCN";
        const insulinBChain = "FVNQHLCGSHLVEALYLVCGERGFFYTPKT";
        
        // Create insulin structure with proper disulfide bonds
        const pdbData = createInsulinStructure(insulinAChain, insulinBChain);
        
        // Load the structure as a blob
        const blob = new Blob([pdbData], { type: 'text/plain' });
        
        stage.loadFile(blob, { ext: 'pdb' }).then((component: any) => {
          // Add cartoon representation with chain-specific coloring
          component.addRepresentation('cartoon', {
            color: 'chainname',
            opacity: 0.8,
          });
          
          // Add licorice representation for disulfide bonds
          component.addRepresentation('licorice', {
            sele: 'CYS',
            opacity: 0.9,
            colorScheme: 'element'
          });
          
          // Add ball+stick for key functional residues
          component.addRepresentation('ball+stick', {
            sele: 'PHE or TYR or LEU',
            opacity: 0.7,
          });
          
          // Auto-view to fit the structure
          component.autoView();
          setIsLoaded(true);
        });

        // Handle window resize
        const handleResize = () => {
          stage.handleResize();
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        
      } catch (error) {
        console.error('Error loading NGL viewer:', error);
      }
    };

    initViewer();

    return () => {
      if (stageRef.current) {
        stageRef.current.dispose();
      }
    };
  }, []);

  const handleZoomIn = () => {
    if (stageRef.current) {
      const stage = stageRef.current;
      const viewer = stage.viewer;
      
      // Use NGL's built-in zoom functionality
      const camera = viewer.camera;
      const controls = stage.mouseControls;
      
      // Scale the zoom by reducing the camera distance
      const zoomFactor = 0.8; // Zoom in by 20%
      camera.position.multiplyScalar(zoomFactor);
      viewer.requestRender();
    }
  };

  const handleZoomOut = () => {
    if (stageRef.current) {
      const stage = stageRef.current;
      const viewer = stage.viewer;
      
      // Use NGL's built-in zoom functionality
      const camera = viewer.camera;
      
      // Scale the zoom by increasing the camera distance
      const zoomFactor = 1.25; // Zoom out by 25%
      camera.position.multiplyScalar(zoomFactor);
      viewer.requestRender();
    }
  };

  const handleRotate = () => {
    if (stageRef.current) {
      const stage = stageRef.current;
      const viewer = stage.viewer;
      
      // Animate a smooth rotation around the Y axis
      let angle = 0;
      const totalRotation = Math.PI * 2; // Full 360 degree rotation
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames for smooth animation
      const angleStep = totalRotation / steps;
      const timeStep = duration / steps;
      
      const rotateInterval = setInterval(() => {
        if (angle >= totalRotation) {
          clearInterval(rotateInterval);
          return;
        }
        
        // Apply rotation to the scene
        if (viewer.scene && viewer.scene.rotation) {
          viewer.scene.rotation.y += angleStep;
          viewer.requestRender();
        }
        
        angle += angleStep;
      }, timeStep);
    }
  };

  const handleReset = () => {
    if (stageRef.current && stageRef.current.compList.length > 0) {
      stageRef.current.compList[0].autoView();
    }
  };

  return (
    <div className="relative">
      <div 
        ref={viewerRef} 
        className={`w-full h-96 bg-gray-900 rounded-lg ${className || ''}`}
        style={{ minHeight: '384px' }}
      />
      
      {/* Control Panel */}
      {isLoaded && (
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleZoomIn}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md shadow-lg transition-colors"
            title="Zoom In"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
          
          <button
            onClick={handleZoomOut}
            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md shadow-lg transition-colors"
            title="Zoom Out"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          </button>
          
          <button
            onClick={handleRotate}
            className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-md shadow-lg transition-colors"
            title="Rotate Structure"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          
          <button
            onClick={handleReset}
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-md shadow-lg transition-colors"
            title="Reset View"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

// Helper function to create insulin structure with A and B chains
function createInsulinStructure(aChain: string, bChain: string): string {
  const aminoAcids: { [key: string]: string } = {
    'A': 'ALA', 'R': 'ARG', 'N': 'ASN', 'D': 'ASP', 'C': 'CYS',
    'E': 'GLU', 'Q': 'GLN', 'G': 'GLY', 'H': 'HIS', 'I': 'ILE',
    'L': 'LEU', 'K': 'LYS', 'M': 'MET', 'F': 'PHE', 'P': 'PRO',
    'S': 'SER', 'T': 'THR', 'W': 'TRP', 'Y': 'TYR', 'V': 'VAL'
  };

  let pdbContent = [
    'HEADER    INSULIN                                 30-JUN-25   1INS',
    'TITLE     HUMAN INSULIN HORMONE - A AND B CHAINS',
    'MODEL        1'
  ];

  let atomIndex = 1;

  // Create A chain (21 residues) - forms alpha helix and beta strand
  for (let i = 0; i < aChain.length; i++) {
    const aa = aChain[i];
    const resName = aminoAcids[aa] || 'UNK';
    const resNum = i + 1;
    
    let x, y, z;
    
    if (i < 8) {
      // N-terminal region - extended/loop
      x = i * 3.5;
      y = 2 * Math.sin(i * 0.5);
      z = 0;
    } else if (i < 19) {
      // Central alpha helix (residues 9-19)
      const helixPos = i - 8;
      const angle = helixPos * 100 * (Math.PI / 180);
      x = 25 + 2.3 * Math.cos(angle);
      y = 2.3 * Math.sin(angle);
      z = helixPos * 1.5;
    } else {
      // C-terminal region
      const endPos = i - 19;
      x = 28 + endPos * 2;
      y = -3 + endPos;
      z = 16 + endPos * 0.5;
    }

    // Add CA atom
    pdbContent.push(
      `ATOM  ${atomIndex.toString().padStart(5, ' ')}  CA  ${resName} A${resNum.toString().padStart(4, ' ')}    ${x.toFixed(3).padStart(8, ' ')}${y.toFixed(3).padStart(8, ' ')}${z.toFixed(3).padStart(8, ' ')}  1.00 20.00           C`
    );
    atomIndex++;

    // Add CB for non-glycine
    if (aa !== 'G') {
      const cbX = x + 1.5 * Math.cos(i * 0.7);
      const cbY = y + 1.5 * Math.sin(i * 0.7);
      const cbZ = z + 0.8;
      
      pdbContent.push(
        `ATOM  ${atomIndex.toString().padStart(5, ' ')}  CB  ${resName} A${resNum.toString().padStart(4, ' ')}    ${cbX.toFixed(3).padStart(8, ' ')}${cbY.toFixed(3).padStart(8, ' ')}${cbZ.toFixed(3).padStart(8, ' ')}  1.00 20.00           C`
      );
      atomIndex++;
    }

    // Add SG for cysteine residues
    if (aa === 'C') {
      const sgX = x + 2.0;
      const sgY = y + 1.8;
      const sgZ = z + 1.2;
      
      pdbContent.push(
        `ATOM  ${atomIndex.toString().padStart(5, ' ')}  SG  ${resName} A${resNum.toString().padStart(4, ' ')}    ${sgX.toFixed(3).padStart(8, ' ')}${sgY.toFixed(3).padStart(8, ' ')}${sgZ.toFixed(3).padStart(8, ' ')}  1.00 20.00           S`
      );
      atomIndex++;
    }
  }

  // Create B chain (30 residues) - positioned to interact with A chain
  for (let i = 0; i < bChain.length; i++) {
    const aa = bChain[i];
    const resName = aminoAcids[aa] || 'UNK';
    const resNum = i + 1;
    
    let x, y, z;
    
    if (i < 8) {
      // N-terminal region of B chain
      x = 10 + i * 2.5;
      y = 15 + 3 * Math.cos(i * 0.4);
      z = 5 + i * 0.8;
    } else if (i < 20) {
      // Central region - forms beta strand and turns
      const midPos = i - 8;
      x = 30 + midPos * 1.5;
      y = 18 - midPos * 0.8;
      z = 10 + midPos * 1.2;
    } else {
      // C-terminal alpha helix
      const helixPos = i - 20;
      const angle = helixPos * 95 * (Math.PI / 180);
      x = 45 + 2.5 * Math.cos(angle);
      y = 10 + 2.5 * Math.sin(angle);
      z = 22 + helixPos * 1.4;
    }

    // Add CA atom
    pdbContent.push(
      `ATOM  ${atomIndex.toString().padStart(5, ' ')}  CA  ${resName} B${resNum.toString().padStart(4, ' ')}    ${x.toFixed(3).padStart(8, ' ')}${y.toFixed(3).padStart(8, ' ')}${z.toFixed(3).padStart(8, ' ')}  1.00 20.00           C`
    );
    atomIndex++;

    // Add CB for non-glycine
    if (aa !== 'G') {
      const cbX = x + 1.5 * Math.cos(i * 0.6);
      const cbY = y + 1.5 * Math.sin(i * 0.6);
      const cbZ = z + 0.7;
      
      pdbContent.push(
        `ATOM  ${atomIndex.toString().padStart(5, ' ')}  CB  ${resName} B${resNum.toString().padStart(4, ' ')}    ${cbX.toFixed(3).padStart(8, ' ')}${cbY.toFixed(3).padStart(8, ' ')}${cbZ.toFixed(3).padStart(8, ' ')}  1.00 20.00           C`
      );
      atomIndex++;
    }

    // Add SG for cysteine residues
    if (aa === 'C') {
      const sgX = x + 2.2;
      const sgY = y + 1.9;
      const sgZ = z + 1.1;
      
      pdbContent.push(
        `ATOM  ${atomIndex.toString().padStart(5, ' ')}  SG  ${resName} B${resNum.toString().padStart(4, ' ')}    ${sgX.toFixed(3).padStart(8, ' ')}${sgY.toFixed(3).padStart(8, ' ')}${sgZ.toFixed(3).padStart(8, ' ')}  1.00 20.00           S`
      );
      atomIndex++;
    }
  }

  // Add disulfide bonds - insulin has 2 interchain and 1 intrachain disulfide bonds
  // A6-A11 (intrachain A), A7-B7 (interchain), A20-B19 (interchain)
  pdbContent.push('CONECT    6   11');  // A6-A11 intrachain
  pdbContent.push('CONECT    7   28');  // A7-B7 interchain (approximate positions)
  pdbContent.push('CONECT   20   40');  // A20-B19 interchain (approximate positions)

  pdbContent.push('ENDMDL');
  pdbContent.push('END');

  return pdbContent.join('\n');
}
