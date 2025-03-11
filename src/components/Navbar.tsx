
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type DropdownMenuItem = {
  label: string;
  href: string;
};

type DropdownProps = {
  label: string;
  items?: DropdownMenuItem[];
  href?: string;
};

const NavDropdown = ({ label, items, href }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        className="flex items-center text-gray-700 px-3 py-2 hover:text-zapier-orange transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        {items && (
          <ChevronDown className="ml-1 h-4 w-4" />
        )}
      </button>
      
      {items && isOpen && (
        <div className="absolute left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg py-2 z-50 min-w-[200px]">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-zapier-orange"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const TopNavbar = () => {
  const mainNavItems = [
    {
      label: "Products",
      items: [
        { label: "Platform", href: "#" },
        { label: "Zapier for Teams", href: "#" },
        { label: "Zapier for Companies", href: "#" },
      ]
    },
    {
      label: "Solutions",
      items: [
        { label: "Marketing", href: "#" },
        { label: "Sales", href: "#" },
        { label: "Finance", href: "#" },
        { label: "IT", href: "#" },
        { label: "HR", href: "#" },
      ]
    },
    {
      label: "Resources",
      items: [
        { label: "Blog", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Experts Directory", href: "#" },
      ]
    },
    { label: "Enterprise", href: "#" },
    { label: "Pricing", href: "#" },
  ];

  return (
    <nav className="bg-white py-4 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/700e75fa-c0a8-4ad4-83fb-e98f164d2e23.png" alt="Zapier Logo" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {mainNavItems.map((item, index) => (
              <NavDropdown 
                key={index}
                label={item.label}
                items={item.items}
                href={item.href}
              />
            ))}
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-zapier-orange flex items-center">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Explore apps
          </button>
          <Link to="/contact" className="text-gray-700 hover:text-zapier-orange">
            Contact sales
          </Link>
          <Link to="/login" className="text-gray-700 hover:text-zapier-orange">
            Log in
          </Link>
          <Link to="/signup" className="bg-zapier-orange text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors">
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

const BlogNavbar = () => {
  const blogNavItems = [
    {
      label: "App picks",
      items: [
        { label: "Best apps", href: "#" },
        { label: "New apps", href: "#" },
        { label: "App reviews", href: "#" },
      ]
    },
    {
      label: "Automation with Zapier",
      items: [
        { label: "Getting started", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Case studies", href: "#" },
      ]
    },
    {
      label: "Productivity",
      items: [
        { label: "Time management", href: "#" },
        { label: "Workflow tips", href: "#" },
        { label: "Work-life balance", href: "#" },
      ]
    },
    {
      label: "Business growth",
      items: [
        { label: "Marketing", href: "#" },
        { label: "Sales", href: "#" },
        { label: "Customer service", href: "#" },
      ]
    },
    {
      label: "Product & platform",
      items: [
        { label: "Updates", href: "#" },
        { label: "Features", href: "#" },
        { label: "Integrations", href: "#" },
      ]
    },
    {
      label: "Company updates",
      items: [
        { label: "News", href: "#" },
        { label: "Events", href: "#" },
        { label: "Culture", href: "#" },
      ]
    },
    {
      label: "Remote work",
      items: [
        { label: "Tips", href: "#" },
        { label: "Tools", href: "#" },
        { label: "Guides", href: "#" },
      ]
    },
    { label: "Zapier guides", href: "#" },
  ];

  return (
    <nav className="bg-white py-2 px-6 border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center overflow-x-auto pb-1">
        <Link to="/blog" className="flex items-center pr-5 mr-3 border-r border-gray-200">
          <div className="bg-zapier-orange p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
          </div>
          <span className="font-bold text-lg">Blog</span>
        </Link>
        
        <div className="flex space-x-2 whitespace-nowrap">
          {blogNavItems.map((item, index) => (
            <NavDropdown 
              key={index}
              label={item.label}
              items={item.items}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export { TopNavbar, BlogNavbar };
