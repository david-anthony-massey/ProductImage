import React from 'react';
import Thumbnail from "./Thumbnail.jsx";
import FullImage from "./FullImage.jsx";

const PopUpGallery = ({images, id, currentPhoto, togglePopUp, prodName, clickChoose}) => {

  return (
    <div className="tay-popup">
      <div className="tay-popupgallery">
        <button className="tay-close" onClick={togglePopUp}>X</button>
        <h4 className="tay-ProdName">{prodName}</h4><br />
        <div className="tay-popupMain">
          <FullImage 
            id={id}
            className="tay-popupprodimage" 
            src={currentPhoto ? currentPhoto : images[0]}
          />
        </div>
        <div className="tay-popupthumbnailsDiv">
          {images.map( (url, index) => {
            return (
              <Thumbnail 
                id={id}
                className="tay-popupthumbnail" 
                key={index+id} 
                image={url} 
                width="100px"
                clickChoose={clickChoose}/>
              )
            })}
        </div>
      </div>
    </div>
  );
};

export default PopUpGallery;
