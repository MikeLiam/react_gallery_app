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
import Loading from './Components/Loading'

class App extends Component {

  
  static contextType = ReactGalleryAppContext;
  constructor(props) {
    super(props);
    this.state = {    
      frontImage: false,
      image: "",
      imageId: "",
      listenHistory: false
    };
    }
  
    updateSearchUrl() {
      if (this.props.history.length > 2) {
        const pathname = this.props.location.pathname.split('/');
        if(pathname.findIndex(path => path === "gallery") === 1 ) {
          const topic = pathname[2];
          this.context.actions.onSearch(topic);
        }
      } 
    }

    componentDidMount() {
      this.context.searchContainer.forEach( search => this.context.actions.onSearch(search.topic));
      if (!this.state.listenHistory) {
        this.updateSearchUrl();
        this.setState({listenHistory: true})
      }
      this.props.history.listen((location, action) => {
        this.updateSearchUrl()
      });
  }

handleImage = (target,show, action, id) => {
  let src =""
    if (action !== "open") {
      const liImage = document.getElementById(`${id}`);
      if (action === "prev") {
          let prevLiImage = liImage.previousElementSibling;
          if (prevLiImage === null) {
            prevLiImage = liImage.parentNode.lastElementChild
          } 
            src = prevLiImage.querySelector('img').src
            id = prevLiImage.id;
        } else if (action === "next") {
          let nextLiImage = liImage.nextElementSibling;
          if (nextLiImage === null) {
            nextLiImage = liImage.parentNode.firstElementChild
          } 
            src = nextLiImage.querySelector('img').src;
            id = nextLiImage.id;
      }
    } else {
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
                ? (<Loading />)
                : (
                  <Switch>
                    <Route exact path="/" render={ () => <Redirect to="/gallery/yamahatracer"/>}/>
                    <Route path="/gallery/:topic" render={ (props) => <PhotoContainer topic={props.match.params.topic}  handlePhoto={this.handleImage}/> }/>
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
