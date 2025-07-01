interface FooterProps {
  companyName?: string;
  year?: number;
}

export const Footer = ({ 
  companyName = "ProteinApp", 
  year = new Date().getFullYear() 
}: FooterProps) => {
  return (
    <footer className="py-10 text-center text-gray-500 text-sm bg-gray-900">
      © {year} {companyName} — Built for Researchers
    </footer>
  );
};
