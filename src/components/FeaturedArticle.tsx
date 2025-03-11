
import React from 'react';
import { Link } from 'react-router-dom';

type FeaturedArticleProps = {
  title: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  readTime: string;
  image?: string;
  category: string;
  categoryLink: string;
};

const FeaturedArticle = ({
  title,
  description,
  author,
  readTime,
  image,
  category,
  categoryLink
}: FeaturedArticleProps) => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <Link to={categoryLink} className="text-zapier-orange hover:underline mb-4 inline-block">
        {category}
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{title}</h1>
          <p className="text-gray-700 mb-6">{description}</p>
          
          <div className="flex items-center">
            <img 
              src={author.avatar} 
              alt={author.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="text-sm">By {author.name}</p>
              <p className="text-sm text-gray-500">{readTime}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-zapier-light-orange rounded-lg p-6 flex items-center justify-center">
          {image ? (
            <img src={image} alt={title} className="max-w-full" />
          ) : (
            <div className="w-40 h-40 flex items-center justify-center border-4 border-black rounded">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
              </svg>
            </div>
          )}
          <div className="absolute top-4 right-4 bg-white text-sm py-1 px-3 rounded-full">
            Featured article
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArticle;
