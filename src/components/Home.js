// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Welcome to Our Product Store</h1> {/* Add margin bottom for spacing */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <p>
            Heritage milk products are crafted with care, bringing you the rich taste and nutritional benefits of pure milk. Our products are sourced from local farms that prioritize traditional farming practices, ensuring the highest quality and freshness. Enjoy the natural goodness of our heritage milk, cheeses, and yogurt, all made with love and passion for preserving our dairy heritage.
          </p>
        </div>
        <div className="col-md-8">
          <img
            src="https://www.foodnavigator-asia.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator-asia.com/headlines/business/heritage-foods-expands-indian-market-share-with-new-dairy-acquisition/7572596-1-eng-GB/Heritage-Foods-expands-Indian-market-share-with-new-dairy-acquisition.jpg" // Use the path relative to the public folder
            alt="Heritage Milk Products"
            className="img-fluid"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
