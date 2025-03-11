
import React from 'react';
import { Link } from 'react-router-dom';

type ArticleCardProps = {
  title: string;
  category: string;
  categoryLink: string;
  date: string;
  readTime: string;
};

const ArticleCard = ({
  title,
  category,
  categoryLink,
  date,
  readTime,
}: ArticleCardProps) => {
  return (
    <div className="border-t border-gray-200 pt-6">
      <Link 
        to={categoryLink}
        className="text-sm text-zapier-orange hover:underline mb-2 block"
      >
        {category}
      </Link>
      
      <h3 className="text-xl font-semibold mb-2">
        <Link to="#" className="text-gray-800 hover:text-zapier-orange">
          {title}
        </Link>
      </h3>
      
      <p className="text-sm text-gray-500">
        {date} | {readTime}
      </p>
    </div>
  );
};

export default ArticleCard;
