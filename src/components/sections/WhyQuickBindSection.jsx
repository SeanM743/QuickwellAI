import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Target, DollarSign } from 'lucide-react';

function WhyQuickBindSection() {
  return (
    <section id="platform" className="py-20 bg-gradient-to-b from-black to-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why <span className="text-[#00FFE3]">QuickBind™</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Traditional antibody discovery takes 11+ months. The process has been revolutionized. Our Quick Research Agent is queried, which performs deep research on the disease and returns results for potential antigen targetst.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            className="text-center scroll-fade-up card-hover"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
              <Clock className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">4 Weeks</h3>
            <p className="text-gray-300">From 11+ months to &lt;4 weeks discovery timeline</p>
          </motion.div>

          <motion.div 
            className="text-center scroll-fade-up card-hover"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
              <Target className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">↑ Specificity</h3>
            <p className="text-gray-300">Enhanced sensitivity and specificity through AI-driven design</p>
          </motion.div>

          <motion.div 
            className="text-center scroll-fade-up card-hover"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 glow-effect">
              <DollarSign className="text-black" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">↓ Cost</h3>
            <p className="text-gray-300">Reduced animal use and R&D costs</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyQuickBindSection;