import React from 'react';
import Photo from './Photo';
import NoPhoto from './NoPhoto'

const PhotoContainer = props => { 
  const results = props.data;
  let photos;
//   if (results.length > 0) {
//     photos = results.map(photo => 
//       <Photo url={""} key={photo.id}/>
//     )
//   } else {
//     photos = <NoPhoto />
//   }
  
  return(
    <div className="photo-container">
        <h2>Results</h2>
        <ul>
        {/* <Gif /> */}
        {photos}
        </ul> 
    </div>
  );
}

export default PhotoContainer;