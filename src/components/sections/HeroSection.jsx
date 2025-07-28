import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Play, ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

function HeroSection({ scrollY }) {
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);

  const handleCTAClick = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden circuit-pattern">
      <motion.div 
        style={{ y: heroY }}
        className="absolute inset-0 hero-overlay"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="glow-text">AI-Built Antibodies and Peptides</span>
            <br />
            <span className="text-[#00FFE3]">in Weeks, Not Years</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Powered by <span className="text-[#00FFE3] font-semibold">QuickBind™</span> - 
            Accelerate human health by shrinking binder discovery from years to &lt;4 weeks
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleCTAClick}
              size="lg"
              className="btn-primary text-black font-semibold px-8 py-4 text-lg"
            >
              Explore the Engine
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={handleCTAClick}
              className="border-[#00FFE3] text-[#00FFE3] hover:bg-[#00FFE3] hover:text-black px-8 py-4 text-lg"
            >
              <Play className="mr-2" size={20} />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown className="text-[#00FFE3]" size={32} />
      </motion.div>
    </section>
  );
}

export default HeroSection;