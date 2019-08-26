import React, { Component } from 'react';
import { fetchData } from './helpers/request';
import './App.css';
import Search from './components/search/search';
import RenderImages from './components/renderImages/renderImages';

export default class App extends Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await fetchData('https://api.unsplash.com/search/photos', {
      params: { query: term.searchValue},
      headers: {
          Authorization: 'Client-ID 6f1d78e5b798221913aca29f1c251b710e017f4b01d6d834d516b774df8c3d77'
      }
    });
    console.log('response: ', response);
    this.setState({images: response.results});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gallery</h1>
        </header>
        <div>
          <Search onHandleSubmit={this.onSearchSubmit} />
          <span data-test="image-length">Found: {this.state.images.length} images</span>
          <RenderImages foundImages={this.state.images} />
        </div>
      </div>
    );
  }
}
