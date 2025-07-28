import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

function ContactSection() {
  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "🚧 Contact form isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in <span className="text-[#00FFE3]">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to accelerate your peptide discovery? Let's discuss how QuickBind™ can help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="scroll-fade-up">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-300">inquiries@quickwelldiagnostics.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-gradient-to-br from-[#007C89] to-[#00FFE3] w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-black" size={20} />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-fade-up">
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                <input 
                  type="text" 
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-[#111111] border border-[#007C89]/30 rounded-lg focus:border-[#00FFE3] focus:outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-[#111111] border border-[#007C89]/30 rounded-lg focus:border-[#00FFE3] focus:outline-none transition-colors"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#007C89]/30 rounded-lg focus:border-[#00FFE3] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project and how we can help..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="nda"
                  className="mr-3 w-4 h-4 text-[#00FFE3] bg-[#111111] border-[#007C89] rounded focus:ring-[#00FFE3]"
                />
                <label htmlFor="nda" className="text-sm text-gray-300">
                  I agree to sign an NDA if required for detailed discussions
                </label>
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="btn-primary text-black font-semibold w-full"
              >
                Send Message
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;