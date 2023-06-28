import React from 'react';
import {
  GalleryWrapper,
  GalleryTitle,
  GalleryImages,
  GalleryImage,
} from './styles';

const galleryImage1 = require('../../images/gallery1.jpg');
const galleryImage2 = require('../../images/gallery2.jpg');
const galleryImage3 = require('../../images/gallery3.jpg');
const galleryImage4 = require('../../images/gallery4.jpg');
const galleryImage5 = require('../../images/gallery5.jpg');
const galleryImage6 = require('../../images/gallery6.jpg');

const Gallery = () => {
  return (
    <GalleryWrapper id="gallery">
      <GalleryTitle>Gallery</GalleryTitle>
      <GalleryImages>
        <GalleryImage src={galleryImage1} alt="Image 1" />
        <GalleryImage src={galleryImage2} alt="Image 2" />
        <GalleryImage src={galleryImage3} alt="Image 3" />
        <GalleryImage src={galleryImage4} alt="Image 4" />
        <GalleryImage src={galleryImage5} alt="Image 5" />
        <GalleryImage src={galleryImage6} alt="Image 6" />
      </GalleryImages>
    </GalleryWrapper>
  );
};

export default Gallery;
