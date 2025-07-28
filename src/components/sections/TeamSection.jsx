import React from 'react';
import { motion } from 'framer-motion';

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-[#00FFE3]">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            World-class experts in AI, biotechnology, and clinical development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Rohit",
              role: "AI/Omics Lead",
              bio: "Expert in machine learning and bioinformatics",
              image: "Professional headshot of Rohit, AI and omics specialist",
              src: "/images/Rohit Kolora NPAW 2022.jpg"
            },
            {
              name: "Sastri", 
              role: "Antibody Development Lead",
              bio: "Specialist in antibody engineering and protein design",
              image: "Professional headshot of Sastri, antibody development expert",
              src: "/images/Head shot for profile.jpg"
            },
            {
              name: "Farzam",
              role: "CSO and Co-founder", 
              bio: "Strategy, Clinical development and Regulatory affairs",
              image: "Professional headshot of Farzam, clinical development leader",
              src: "/images/gorouhi-farzam-1.JPG"
            },
            {
              name: "Kanika",
              role: "CEO and Co-founder",
              bio: "Biochemistry, Strategic partnerships and market development",
              image: "Professional headshot of Kanika, business development specialist",
              src: "/images/Kcrop.jpg"
            }
          ].map((member, index) => (
            <motion.div
              key={index}
              className="text-center scroll-fade-up card-hover"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative mb-6">
                <img  
                  className="w-32 h-32 rounded-full mx-auto object-cover object-top border-4 border-[#007C89] glow-effect"
                  alt={`${member.name} - ${member.role}`}
                  src={member.src} />
              </div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-[#00FFE3] font-semibold mb-2">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;