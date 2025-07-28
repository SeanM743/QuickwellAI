import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

function Navbar({ isNavShrunk, isMenuOpen, setIsMenuOpen }) {
  const handleCTAClick = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isNavShrunk ? 'nav-shrink py-2' : 'py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-[#007C89] to-[#00FFE3] rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">Q</span>
            </div>
            <span className="text-xl font-bold">QuickwellAI</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#platform" className="hover:text-[#00FFE3] transition-colors">Platform</a>
            <a href="#pipeline" className="hover:text-[#00FFE3] transition-colors">Pipeline</a>
            <a href="#team" className="hover:text-[#00FFE3] transition-colors">Team</a>
            <a href="#resources" className="hover:text-[#00FFE3] transition-colors">Resources</a>
            <a href="#contact" className="hover:text-[#00FFE3] transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-800"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#platform" className="hover:text-[#00FFE3] transition-colors">Platform</a>
              <a href="#pipeline" className="hover:text-[#00FFE3] transition-colors">Pipeline</a>
              <a href="#team" className="hover:text-[#00FFE3] transition-colors">Team</a>
              <a href="#resources" className="hover:text-[#00FFE3] transition-colors">Resources</a>
              <a href="#contact" className="hover:text-[#00FFE3] transition-colors">Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;