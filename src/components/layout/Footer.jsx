import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#111111] border-t border-[#007C89]/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[#007C89] to-[#00FFE3] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">Q</span>
              </div>
              <span className="text-xl font-bold">QuickwellAI</span>
            </div>
            <p className="text-gray-400 text-sm">
              Accelerating human health through AI-native antibody discovery.
            </p>
          </div>
          
          <div>
            <span className="font-semibold mb-4 block">Platform</span>
            <div className="space-y-2 text-sm text-gray-400">
              <p>QuickBind™ Engine</p>
              <p>Diagnostic Solutions</p>
              <p>API Access</p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold mb-4 block">Company</span>
            <div className="space-y-2 text-sm text-gray-400">
              <p>About Us</p>
              <p>Careers</p>
              <p>News</p>
            </div>
          </div>
          
          <div>
            <span className="font-semibold mb-4 block">Legal</span>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>GDPR Compliance</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#007C89]/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 QuickwellAI. All rights reserved. Research-use only. Not for diagnostic procedures.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;