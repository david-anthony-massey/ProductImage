import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Image = ({categories, addCat, newCat, catPlace, budget, setBudget}) => {
  return (
    <div className="prodImage">
      <div className="fullImage">
        <h2>[full image]</h2>
      </div>
      <div className="thumbnails">
        {/*map over thumbnails*/
        
        <Thumbnail />
        }
      </div>
    </div>
  );
};

export default Image;
