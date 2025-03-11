
import React from 'react';

const Newsletter = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">Get productivity tips delivered straight to your inbox</h2>
      <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-grow px-4 py-3 border border-gray-300 rounded"
          required
        />
        <button
          type="submit"
          className="bg-zapier-orange text-white px-6 py-3 rounded font-medium hover:bg-orange-600 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
