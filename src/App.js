import React, { Component } from 'react';
import {
  Route,
  Switch,
  withRouter,
  Redirect
} from 'react-router-dom';


import { ReactGalleryAppContext } from './Context'
import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import PhotoContainer from './Components/PhotoContainer';
import FourOuFour from './Components/FourOuFour'
import FrontImage from './Components/FrontImage'

class App extends Component {

  
  static contextType = ReactGalleryAppContext;
  constructor(props) {
    super(props);
    this.state = {    
      frontImage: false,
      image: "",
      imageId: ""
    };
    }
  

  componentDidMount() {
     this.context.searchContainer.forEach( search => this.context.actions.onSearch(search.topic));
     if (this.props.history.length > 2) {
      const pathname = this.props.location.pathname.split('/');
      if(pathname.findIndex(path => path === "gallery") === 1 ) {
        const topic = pathname[2];
        this.context.actions.loading(true)
        this.context.actions.onSearch(topic);
      }
    }
  }
  

 
handleImage = (target,show, action, id) => {
  console.log(action)
  let src =""
    if (action !== "open") {
      console.log("if no open --> ", id)
      const liImage = document.getElementById(`${id}`);
      if (action === "prev") {
        console.log(liImage)
          const prevLiImage = liImage.previousElementSibling;
          if (prevLiImage !== null) {
            src = prevLiImage.querySelector('img').src
            id = prevLiImage.id;
          } else {
            show = false;
          }
        } else if (action === "next") {
          const nextLiImage = liImage.nextElementSibling;
          if (nextLiImage !== null) {
            src = nextLiImage.querySelector('img').src;
            id = nextLiImage.id;
          } else {
            show = false;
          }
      }
    } else {
      console.log("else = open target src--> ", id)
      src = target.src
    }

    this.setState({frontImage: show, image: (show ? src : ""), imageId: (show ? id : "")})
   }

  render() {
    
    
    return (
      <div className="container" >
        <SearchForm />
        <MainNav />
              {
                this.context.loading 
                ? (<p>Loading...</p>)
                : (
                  <Switch>
                    <Route exact path="/" render={ () => <Redirect to="/gallery/yamahatracer"/>}/>
                    <Route path="/gallery/:topic" render={ (props) => <PhotoContainer topic={props.match.params.topic} handlePhoto={this.handleImage}/> }/>
                    <Route component={FourOuFour} />
                  </Switch>
                  )
                }

                { this.state.frontImage && <FrontImage src={this.state.image} id={this.state.imageId} handleImage={this.handleImage}/>}

        
      </div>
    );
  }
}

export default withRouter(App);

// constructor() {
//   super();
//   this.state = {
//     search: 
//     [
//       {
//         topic: "",
//         photos: []
//       }
//     ],
//     navsPhotos: [
//       {
//         topic: "yamaha tracer",
//         photos: []
//       },
//       {
//         topic: "kawasaki versys",
//         photos: []
//       },
//       {
//         topic: "bmw gs",
//         photos: []
//       }
//     ],
//     loading: true
//   };
// }

// prepareChangeState = (index, response, elementState,  topic) => {
//   let container = [...elementState];
//   let collection = {...container[index]};
//   collection.photos = response.data.photos.photo;
//   if(topic) {
//     collection.topic = topic
//   }
//   container[index] = collection;
//   return container;
// }

// performSearch = (query) => {
  
//   const index = this.state.navsPhotos.findIndex(navsPhoto => navsPhoto.topic.split(" ").join("") === query.split(" ").join(""));
  
//   if ( index === -1 || ( index !== -1 && this.state.navsPhotos[index].photos.length === 0)) {
//     console.log(index)
//     axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
//     .then( response => {
//       let container = [];
//       if (index !== -1) {
//         container = this.prepareChangeState(index, response, this.state.navsPhotos)
//         this.setState({navsPhotos: container, loading: false});
//       } else {
//         console.log(response.data.photos)
//         container = this.prepareChangeState(this.state.search.length, response, this.state.search, query)
//         // this.setState({ photos: response.data.photos.photo, loading: false});
//         this.setState({search: container, loading: false});
//       }
//     })
//     .catch(error => console.log('Error fetching and parsing data', error));
//   }
  
// }
// render() {
  //   return (
    //       <div className="container" >
    //         <SearchForm onSearch={this.performSearch} />
//         <MainNav />
//         {
//           (this.state.loading)
//           ? <p>Loading...</p>
//           : 
//         <Switch>
//           <Route exact path="/" render={ () => <PhotoContainer data={this.state.navsPhotos[0].photos}/>} />
//           <Route path="/yamahatracer" render={ () => <PhotoContainer data={this.state.navsPhotos[0].photos}/>} />
//           <Route path="/kawasakiversys" render={ () => <PhotoContainer data={this.state.navsPhotos[1].photos}/>} />
//           <Route path="/bmwgs" render={ () => <PhotoContainer data={this.state.navsPhotos[2].photos}/>} />
//           <Route path="/:topic" render={ ({match}) => {
//             let collection = this.state.search.find( collection => collection.topic === match.params.topic)
//             return <PhotoContainer data={collection.photos}/> 
//           }}/>
//         </Switch>
//         }
//       </div>
//   );
// }