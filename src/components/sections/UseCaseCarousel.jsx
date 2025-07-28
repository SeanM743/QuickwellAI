import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

function UseCaseCarousel() {
  const handleCTAClick = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real-World <span className="text-[#00FFE3]">Applications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Proven results across multiple disease applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Rapid Sepsis Panel",
              description: "Ultra-fast detection of sepsis biomarkers for critical care applications",
              status: "Launching 2026",
              image: "Rapid sepsis diagnostic panel with glowing antibodies"
            },
            {
              title: "Pan-Fungal Screen",
              description: "Comprehensive fungal pathogen detection for infectious disease diagnosis",
              status: "Launching 2026", 
              image: "Fungal screening diagnostic with molecular structures"
            },
            {
              title: "Preclampsia Diagnostics",
              description: "Next-generation small molecule diagnostics for pregnancy complications",
              status: "Coming Soon",
              image: "Womens health imagery"
            }
          ].map((useCase, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#111111] to-[#007C89]/20 border border-[#007C89]/30 rounded-lg overflow-hidden card-hover scroll-fade-up"
              whileHover={{ borderColor: '#00FFE3' }}
              onClick={handleCTAClick}
            >
              <img  
                className="w-full h-48 object-cover"
                alt={useCase.title}
               src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">{useCase.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    useCase.status === 'Available Now' 
                      ? 'bg-[#00FFE3] text-black' 
                      : 'bg-[#007C89] text-white'
                  }`}>
                    {useCase.status}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="flex items-center text-[#00FFE3] text-sm">
                  <CheckCircle size={16} className="mr-2" />
                  Built with QuickBind™
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UseCaseCarousel;