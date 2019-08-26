import React, { Component } from 'react';
import ImageCard from '../imageCard/imageCard';
import style from './renderImages.module.css';

export default class RenderImages extends Component {
    imageList(images) {
        return images.map(img => {
            return <ImageCard key={img.id} image={img} />
        });
    }

    render() {
        const images = this.props.foundImages;
        
        return(
            <div className={style.imagesContainer}>
                {this.imageList(images)}
            </div>
        );
    }
}