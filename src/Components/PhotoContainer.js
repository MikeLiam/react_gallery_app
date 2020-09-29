import React from 'react';

import {Consumer} from '../Context';

import Photo from './Photo';
import NoPhoto from './NoPhoto'


const PhotoContainer = (props) =>  { 

  return(
    <div>
      <div className="photo-container">
          <h2>Results</h2>
          <ul>
            <Consumer>
                { ({searchContainer, noResults}) => {
                  let topic = props.topic;
                  let component ;
                  let photos
                  let index
                  
                  index = searchContainer.findIndex(navLink => navLink.topic.split(" ").join("") === topic.split(" ").join(""));
                  if(index !== -1) {
                    
                    photos = searchContainer[index].photos;
                        component = photos.map( photo => (
                          <Photo
                              farm={photo.farm}
                              secret={photo.secret}
                              server={photo.server}
                              id={photo.id}
                              key={photo.id}
                              handlePhoto={ props.handlePhoto }/>
                        ));
                        return component
                  } 
                  return noResults?  <NoPhoto /> : component
                }}
          </Consumer>
          </ul> 
      </div>
          
    </div>
  );
}       


export default PhotoContainer;
