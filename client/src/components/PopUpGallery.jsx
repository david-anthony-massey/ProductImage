import React from 'react';
import Thumbnail from "./Thumbnail.jsx";
import FullImage from "./FullImage.jsx";

const PopUpGallery = ({images, id, currentPhoto, clickIt}) => {

  return (
    <>
      <div className="popup">
        <div className="popupgallery">
            <button onClick={clickIt}>X</button>
          <h2>{images.productName}</h2>
          <div className="popupthumbnailsDiv">
            {
              images.imgUrls.map( (url, index) => {
                return (
                  <Thumbnail 
                    className="popupthumbnail" 
                    key={index, id} 
                    image={url} 
                    width="100px"/>
                )
              })
            }

            <FullImage 
              className="popupprodImage" 
              src={currentPhoto ? currentPhoto : images.imgUrls[0]}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpGallery;
