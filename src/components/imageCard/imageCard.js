import React, { Component } from 'react';

export default class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  render() {
    return (
      <div>
          <img ref={this.imageRef} 
              src={this.props.image.urls.regular}
              alt={this.props.image.alt_description} />
      </div>
    )
  }
}
