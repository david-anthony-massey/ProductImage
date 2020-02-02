import React from 'react';
import Thumbnail from "./Thumbnail.jsx";
import FullImage from "./FullImage.jsx";

const PopUpGallery = ({images, id, currentPhoto, clickIt}) => {

  return (
    <>
      <div className="popup">
        <div className="popupgallery">
          <button onClick={clickIt}>X</button>
          <h4>{images.productName}</h4>
          <br></br>
          <div className="popupMain">
            <FullImage 
              className="popupprodImage" 
              src={currentPhoto ? currentPhoto : images.imgUrls[0]}
            />
          </div>
          <div className="popupthumbnailsDiv">
            {
              images.imgUrls.map( (url, index) => {
                return (
                  <Thumbnail 
                    className="popupthumbnail" 
                    key={index+id} 
                    image={url} 
                    width="100px"/>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpGallery;
