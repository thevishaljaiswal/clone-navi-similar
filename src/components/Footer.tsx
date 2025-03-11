
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <img 
            src="/lovable-uploads/700e75fa-c0a8-4ad4-83fb-e98f164d2e23.png" 
            alt="Zapier" 
            className="h-8 w-auto mr-4"
          />
          <span className="text-2xl font-bold">Zapier</span>
        </div>
        
        <div className="flex items-center text-white">
          <span>curated by</span>
          <span className="ml-2 text-2xl font-bold">Mobbin</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
