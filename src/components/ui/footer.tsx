import logoImage from "@/assets/Asset 1black.png";

export const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-6 flex justify-center">
        <img 
          src={logoImage} 
          alt="Viva Academy Logo" 
          className="h-12 w-auto"
        />
      </div>
    </footer>
  );
};