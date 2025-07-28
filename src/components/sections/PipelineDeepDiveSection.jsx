import React from 'react';
import { motion } from 'framer-motion';
import { Target, Database, Brain, Zap, Microscope } from 'lucide-react';

function PipelineDeepDiveSection() {
  return (
    <section id="pipeline" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pipeline <span className="text-[#00FFE3]">Deep-Dive</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Five revolutionary steps that transform antibody discovery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: "Disease Targeting",
              description: "Identify and validate disease-specific biomarkers using comprehensive omics data analysis"
            },
            {
              icon: Database,
              title: "Data Warehousing", 
              description: "Large-scale biological data integration from multiple sources for comprehensive analysis"
            },
            {
              icon: Brain,
              title: "Target Ranking",
              description: "AI-driven similarity analytics and custom ranking models for optimal target selection"
            },
            {
              icon: Zap,
              title: "Antigen Prediction",
              description: "Advanced computational prediction of antigen structures and binding sites"
            },
            {
              icon: Microscope,
              title: "In-silico Design and wet lab validation",
              description: "Complete antibody design and verifiation through intelligent automation and precision biotechnology"
            }
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-[#007C89]/30 rounded-lg p-6 card-hover scroll-fade-up"
              whileHover={{ borderColor: '#00FFE3' }}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <step.icon className="text-black" size={24} />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PipelineDeepDiveSection;