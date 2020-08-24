import React, {
  Component
} from 'react';
import axios from 'axios';
import apiKey from '../config';


export const ReactGalleryAppContext = React.createContext();

export class Provider extends Component {
  state = {
    searchContainer: [{
        topic: "yamaha tracer",
        photos: []
      },
      {
        topic: "kawasaki versys",
        photos: []
      },
      {
        topic: "bmw gs",
        photos: []
      },
      {
        topic: "ducati multistrada",
        photos: []
      }
    ],
    // change to false inicial descomentar componentdidmount app.js
    loading: false,
    noResults: false
  };

  // prepareChangeState = (index, response, elementState, topic) => {
  //   let container = [...elementState];
  //   let collection = {
  //     ...container[index]
  //   };
  //   collection.photos = response.data.photos.photo;
  //   if (topic) {
  //     collection.topic = topic
  //   }
  //   container[index] = collection;
  //   return container;
  // }

  handleLoading = (loading) => {
    this.setState({loading})
  }


  performSearch = (query) => {
    const index = this.state.searchContainer.findIndex(search => search.topic.split(" ").join("") === query.split(" ").join(""));

    if (index === -1 || (index !== -1 && this.state.searchContainer[index].photos.length === 0)) {
      this.setState({
        loading: true
      }, () => {
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            const data = response.data.photos.photo
            if(data.length > 0) {
              if (index !== -1) {
                this.setState(prevState => {
                  let container = [...prevState.searchContainer];
                  let collection = prevState.searchContainer[index];
                  collection.photos = data;
                  container.splice(index, 1, collection);
                  return {
                    searchContainer: container,
                    loading: false, noResults: false
                  }
                });
              } else {
                this.setState(prevState => {
                  let collection = {};
                  collection.photos = data;
                  if (query) {
                    collection.topic = query
                  }

                  return {
                    searchContainer: [...prevState.searchContainer, collection],
                    loading: false, noResults: false
                  }
                });
                
              }} else {
                this.setState(prevState => {
                  return {loading:false, noResults: true}
                })
              }
          })
          .catch(error => console.log('Error fetching and parsing data', error));

      })

    }

  }
    render() {
      return ( 
      <ReactGalleryAppContext.Provider value = {
          {
            searchContainer: this.state.searchContainer,
            loading: this.state.loading,
            noResults: this.state.noResults,
            actions: {
              onSearch: this.performSearch,
              loading: this.handleLoading,
            }
          }
        } > {
          this.props.children
        } </ReactGalleryAppContext.Provider>
      )
    }
  }

  export const Consumer = ReactGalleryAppContext.Consumer;