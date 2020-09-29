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

  // Set context App for calls outside render() function
  static contextType = ReactGalleryAppContext;
  // Set state for image viewer modal and history tracing
  constructor() {
    super();
    this.state = {    
      frontImage: false,
      image: "",
      imageId: "",
      listenHistory: false
    };
    }
  
  /**
   * Call context onSearch function to get topic' data of the url in case goBack browser after refresh page
   */ 
  updateSearchUrl() {
    // Only if there is a navigation history and not only just landing page
    if (this.props.history.length > 2) {
      const pathname = this.props.location.pathname.split('/');
      if(pathname.findIndex(path => path === "gallery") === 1 ) {
        const topic = pathname[2];
        this.context.actions.onSearch(topic);
      }
    } 
  }
  //
  /**
   * Fetch navlinks predefined topics and manage navigation history
   */ 
  componentDidMount() {
    this.context.searchContainer.forEach( search => this.context.actions.onSearch(search.topic));
    // If first time in page or after refresh page
    if (!this.state.listenHistory) {
      // Call for fetch data if refresh page
      this.updateSearchUrl();
      // Set state for future navigation
      this.setState({listenHistory: true})
    }
    // History listener instanciate
    this.props.history.listen((location, action) => {
      this.updateSearchUrl()
    });
  }

  /**
   * Handel image viewer modal (open, close, next image, previous image)
   * @param {HTMLElement} target Image to show in modal
   * @param {Boolean} show true for showing false for closing
   * @param {String} action respective open, close, next image, previous image options
   * @param {Int} id <Li> element id for manage next prev images
   */
  handleImage = (target,show, action, id) => {
    let src;
    // For prev next options
    if (action !== "open" && action !== "close") {
        let futureLiImage;
        //  get <Li> element by id
        const liImage = document.getElementById(`${id}`);
        if (action === "prev") {
          // if previous image option get prev <Li> element
          futureLiImage = liImage.previousElementSibling;
            // if we are in first <Li> element, prev lement is null so go to last <li> element
            if (futureLiImage === null) {
              futureLiImage = liImage.parentNode.lastElementChild
            } 
            
          } else if (action === "next") {
            // if next image get next <Li> element
            futureLiImage = liImage.nextElementSibling;
            // if last and no more sibling, take first
            if (futureLiImage === null) {
              futureLiImage = liImage.parentNode.firstElementChild
            } 
          }
          // Set src from image
          src = futureLiImage.querySelector('img').src
          // set id for future actions
          id = futureLiImage.id;
        } else if (action === "open") {
          // for open action set src from target clicked
        src = target.src
      }
      // Set state if has to show image viewer modal, image src if show or none, imageId if show or none
      this.setState({frontImage: show, image: (show ? src : ""), imageId: (show ? id : "")})
  }

  /**
   * Render function
   */
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
                    
                    <Route exact path="/react_gallery_app" render={ () => <Redirect to="/gallery/yamahatracer"/>}/>
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
