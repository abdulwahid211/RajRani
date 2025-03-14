import React, { Component, useEffect, useState } from 'react';
import '../../styles/styles.scss';

import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ImageGallery } from './ImageGallery';

export const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [photos, setPhotos] = useState<ImageGallery[]>([]);
  const [photoIndex, setPhotoIndex] = useState(0);

  const loadImages = () => {
    for (var i = 1; i <= 8; i++) {
      var source = `../../img/foods/food${i}.png`;
      photos.push({ src: source });
      setPhotos([...photos]);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className="gallery-container">
      {photos.map((photo, index) => (
        <div className="items" key={index}>
          <img
            src={photo.src}
            width="450"
            height="300"
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
          ></img>
        </div>
      ))}

      <Lightbox open={open} close={() => setOpen(false)} index={photoIndex} slides={photos} />
    </div>
  );
};
