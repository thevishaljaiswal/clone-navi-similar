
import React from 'react';
import { TopNavbar, BlogNavbar } from '@/components/Navbar';
import FeaturedArticle from '@/components/FeaturedArticle';
import ArticleCard from '@/components/ArticleCard';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const Index = () => {
  // Sample author avatar using a placeholder
  const authorAvatar = "https://i.pravatar.cc/100";
  
  // Sample article data
  const articles = [
    {
      title: "Your guide to form and survey automation",
      category: "Automation inspiration",
      categoryLink: "/blog/automation-inspiration",
      date: "November 22, 2024",
      readTime: "5 min read"
    },
    {
      title: "5 ways to automate Tactiq with Zapier",
      category: "Automation inspiration",
      categoryLink: "/blog/automation-inspiration",
      date: "November 22, 2024",
      readTime: "4 min read"
    },
    {
      title: "Bitwarden vs. LastPass: Which password manager is best? [2025]",
      category: "App comparisons",
      categoryLink: "/blog/app-comparisons",
      date: "November 22, 2024",
      readTime: "9 min read"
    },
    {
      title: "25 call to action examples (and free CTA generator)",
      category: "Marketing tips",
      categoryLink: "/blog/marketing-tips",
      date: "November 22, 2024",
      readTime: "22 min read"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />
      <BlogNavbar />
      
      <main>
        <FeaturedArticle
          title="How to build an automated system on Zapier"
          description="With Zapier Tables, Interfaces, and Chatbots, you can build entire systems that operate automatically, are powered by AI, and work hand-in-hand with Zaps."
          author={{
            name: "Elena Alston",
            avatar: authorAvatar
          }}
          readTime="5 min read"
          category="Automation inspiration"
          categoryLink="/blog/automation-inspiration"
        />
        
        <div className="max-w-7xl mx-auto py-12 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                category={article.category}
                categoryLink={article.categoryLink}
                date={article.date}
                readTime={article.readTime}
              />
            ))}
          </div>
        </div>
        
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
