import React from 'react';
import Thumbnail from './Thumbnail.jsx';

const Image = ({images, id}) => {
  return (
    <div className="prodImage">
      <div className="fullImage">
        <div className="thumbnailsDiv">
        {/*map over thumbnails*/
        images.imgUrls.map((url, index)=> {
          return <Thumbnail key={id,index} image={url} />
        })
        }
        </div>
        <img className="prodImage" src={images.imgUrls[0]} width="400px"/>
      </div>
    </div>
  );
};

export default Image;
