import React from 'react';
import { toast } from '@/components/ui/use-toast';

function AnimationStrip() {
  const handleCTAClick = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section className="py-20 bg-gradient-to-r from-[#007C89] to-[#00FFE3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
            See QuickBind™ in Action
          </h2>
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <img  
              className="w-full h-64 object-cover rounded-lg antibody-glow"
              alt="QuickBind engine animation showing peptide transformation to antibody"
             src="https://images.unsplash.com/photo-1659959103859-317b78edb1fc" />
            <p className="text-black/80 mt-4 text-lg">
              Peptides → QuickBind™ Engine → Diagnostic-Grade Antibodies
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnimationStrip;