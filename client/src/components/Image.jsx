import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import FullImage from './FullImage.jsx';

const Image = ({images, currentPhoto, id, hoverChoose, hover, fullHover, hoverMain, togglePopUp}) => {

  return (
    <div className="tay-prodImage">
      <div className="tay-fullImage">
        <div className="tay-thumbnailsDiv">
          {images.map((url, index)=> {
            return <Thumbnail
              className="tay-thumbnail" 
              key={id,index} 
              data-id={id}
              id={id}
              i={index} 
              image={url} 
              hoverChoose={hoverChoose}
              />;
          })}
        </div>
        <FullImage 
          data-id={id}
          id={id}
          className="tay-prodImage" 
          src={currentPhoto ? currentPhoto : images[0]}
          fullHover={fullHover}
          clickIt={togglePopUp}
          />
      </div>
      <center>
      {hoverMain ? <><br />Click image to open expanded view</> : <><br />Roll over image to zoom in</>}
      </center>
    </div>
  );
};

export default Image;
