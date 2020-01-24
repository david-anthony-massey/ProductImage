import React from 'react';
import Category from './Category.jsx';

const Categories = ({categories, addCat, newCat, catPlace, budget, setBudget}) => {
  return (
    <div className="category">
      <h2>Component 1</h2>
      <Category />
    </div>
  );
};

export default Categories;
