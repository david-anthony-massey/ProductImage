import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import FullImage from './FullImage.jsx';

const Image = ({images, currentPhoto, id, hoverChoose, hover, fullHover, hoverMain, togglePopUp}) => {

  return (
    <div className="tay-prodImage">
      <div className="tay-fullImage">
        <div className="tay-thumbnailsDiv">
          {/*map over thumbnails*/
          images.map((url, index)=> {
            return <Thumbnail
              className="tay-thumbnail" 
              key={id,index} 
              i={index} 
              image={url} 
              hoverChoose={hoverChoose}
              />;
          })
          }
        </div>

        <FullImage 
          className="tay-prodImage" 
          src={currentPhoto ? currentPhoto : images[0]}
          fullHover={fullHover}
          clickIt={togglePopUp}
          />

      </div>
      <center>
      {hoverMain ? <><br /><text>Click image to open expanded view</text></> : <><br /><text>Roll over image to zoom in</text></>}
      </center>
    </div>
  );
};

export default Image;
