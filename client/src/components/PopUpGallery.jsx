import React from 'react';
import Thumbnail from "./Thumbnail.jsx";
import FullImage from "./FullImage.jsx";

const PopUpGallery = ({images, id, currentPhoto, togglePopUp, prodName, clickChoose}) => {

  return (
    <>
      <div className="popup">
        <div className="popupgallery">
          <button onClick={togglePopUp}>X</button>
          <h4>{prodName}</h4>
          <br></br>
          <div className="popupMain">
            <FullImage 
              className="popupprodImage" 
              src={currentPhoto ? currentPhoto : images[0]}
            />
          </div>
          <div className="popupthumbnailsDiv">
            {
              images.map( (url, index) => {
                return (
                  <Thumbnail 
                    className="popupthumbnail" 
                    key={index+id} 
                    image={url} 
                    width="100px"
                    clickChoose={clickChoose}/>
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
