import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import FullImage from './FullImage.jsx';

const Image = ({images, currentPhoto, id, hoverChoose, hover, fullHover, hoverMain, clickIt}) => {

  return (
    <div className="prodImage">
      <div className="fullImage">
        <div className="thumbnailsDiv">
          {/*map over thumbnails*/
          images.imgUrls.map((url, index)=> {
            return <Thumbnail
              className="thumbnail" 
              key={id,index} 
              i={index} 
              image={url} 
              hoverChoose={hoverChoose}
              />;
          })
          }
        </div>

        <FullImage 
          className="prodImage" 
          src={currentPhoto ? currentPhoto : images.imgUrls[0]}
          fullHover={fullHover}
          clickIt={clickIt}
          />

      </div>
      <center>
      {hoverMain ? <><br /><text>Click image to open expanded view</text></> : <><br /><text>Roll over image to zoom in</text></>}
      </center>
    </div>
  );
};

export default Image;
