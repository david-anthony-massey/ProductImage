import React from 'react';

const PopUpGallery = ({images}) => {

  return (
    <>
      <div className="popup">
        <div className="popupgallery">
          <div className="popupthumbnailsDiv">
            <h1>PopUpGallery</h1>

              <img src={images.imgUrls[0]} width="100px"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default PopUpGallery;
