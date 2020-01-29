import React from 'react';
import Thumbnail from './Thumbnail.jsx';
import FullImage from './FullImage.jsx';

const Image = ({images, currentPhoto, id, hoverIt, hover}) => {
  function hoverText(){
    return (hover ? <><br /><text>Click image to open expanded view</text></> : <><br /><text>Roll over image to zoom in</text></>);
  }
  return (
    <div className="prodImage">
      <div className="fullImage">
        <div className="thumbnailsDiv">
        {/*map over thumbnails*/
        images.imgUrls.map((url, index)=> {
          return <Thumbnail key={id,index} i={index} image={url} hoverIt={hoverIt}/>
        })
        }
        </div>
        <FullImage 
          className="prodImage" 
          src={currentPhoto ? currentPhoto : images.imgUrls[0]} 
          hover={hover} 
          hoverText={hoverText()}
          />
      </div>
    </div>
  );
};

export default Image;
