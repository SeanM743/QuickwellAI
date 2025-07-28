import React from 'react';
import { motion } from 'framer-motion';

function PlatformRoadmap() {
  return (
    <section className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Platform <span className="text-[#00FFE3]">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our vision for the future of antibody discovery
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 timeline-line"></div>
          
          <div className="space-y-12">
            {[
              {
                year: "2025",
                title: "Diagnostic Platform Launch",
                description: "Multi-pathogen detection capabilities with rapid turnaround",
                status: "current"
              },
              {
                year: "2025", 
                title: "API Access & Integration",
                description: "Programmatic access for research institutions and biotech companies",
                status: "upcoming"
              },
              {
                year: "2026",
                title: "Therapeutic Binders",
                description: "Expansion into therapeutic antibody development pipeline",
                status: "future"
              },
              {
                year: "2027",
                title: "Therapeutic petides clinical trials",
                description: "Binding confimration studies, wet lab validationa and patient trials",
                status: "future"
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} scroll-fade-up`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="bg-black/50 backdrop-blur-sm border border-[#007C89]/30 rounded-lg p-6 card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#00FFE3] font-bold text-lg">{milestone.year}</span>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        milestone.status === 'current' ? 'bg-[#00FFE3] text-black' :
                        milestone.status === 'upcoming' ? 'bg-[#007C89] text-white' :
                        'bg-gray-600 text-white'
                      }`}>
                        {milestone.status === 'current' ? 'Now' : 
                         milestone.status === 'upcoming' ? 'Next' : 'Future'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 bg-gradient-to-r from-[#007C89] to-[#00FFE3] rounded-full flex items-center justify-center relative z-10 glow-effect">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformRoadmap;