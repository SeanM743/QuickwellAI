import React from 'react';
import { CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

function ResourcesSection() {
  const handleCTAClick = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="resources" className="py-20 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Resources & <span className="text-[#00FFE3]">Insights</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest in AI-driven antibody discovery
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Future of AI in Antibody Design",
              excerpt: "Exploring how machine learning is revolutionizing biotechnology and accelerating drug discovery timelines.",
              category: "AI Antibody",
              readTime: "5 min read"
            },
            {
              title: "Computational Biology Breakthroughs",
              excerpt: "Latest advances in computational methods for protein design and molecular modeling in life sciences.",
              category: "Computational Bio", 
              readTime: "7 min read"
            },
            {
              title: "Platform Overview PDF",
              excerpt: "Download our comprehensive platform overview detailing QuickBind™ technology and capabilities.",
              category: "Resource",
              readTime: "Download"
            }
          ].map((article, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-[#007C89]/30 rounded-lg overflow-hidden card-hover scroll-fade-up cursor-pointer"
              onClick={handleCTAClick}
            >
              <img  
                className="w-full h-48 object-cover"
                alt={article.title}
               src="https://images.unsplash.com/photo-1585057541480-b6f1be932974" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-[#007C89] text-white rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                <p className="text-gray-300">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;