import React, {
  Component
} from 'react';
import axios from 'axios';
// apikey provided from Flickr
import apiKey from '../config';

// Create context
export const ReactGalleryAppContext = React.createContext();
// Context provider
export class Provider extends Component {
  // default topics and loading/noresults management
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
    loading: false,
    noResults: false
  };

  // Set loading state
  handleLoading = (loading) => {
    this.setState({loading})
  }

  // Fetch query/topic
  performSearch = (query) => {
    // if already in state
    const index = this.state.searchContainer.findIndex(search => search.topic.split(" ").join("") === query.split(" ").join(""));

    if (index === -1 || (index !== -1 && this.state.searchContainer[index].photos.length === 0)) {
      // if not already in state or already in state but void data, set loading state to true and fetch with axios module
      this.setState({
        loading: true
      }, () => {
        // fetch with api url configuration
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
          .then(response => {
            const data = response.data.photos.photo
            // if there is results
            if(data.length > 0) {
              // if already in state (predefined or searched previously)
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
                // If new topic
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
                // if there isn't results set end loading and noresults tracing
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