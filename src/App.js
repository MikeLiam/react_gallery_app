import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import PhotoContainer from './Components/PhotoContainer';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'cats') => {
    // axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=dc6zaTOxFJmzC`)
    //   .then( response => {
    //     this.setState({ gifs: response.data.data, loading: false});
    //   })
    //   .catch(error => console.log('Error fetching and parsing data', error));
    console.log(query);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container" >
          <SearchForm onSearch={this.performSearch} />
          <MainNav />
          <Switch>
            <Route path="/tracer" component={PhotoContainer} />
            <Route exact path="/versys" component={PhotoContainer} />
            <Route path="/nc750" component={PhotoContainer} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}