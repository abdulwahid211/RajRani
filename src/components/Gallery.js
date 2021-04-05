import React, { Component } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
class Gallery extends Component {


  constructor(props) {
    super(props)
    const photos = []

    for (var i = 1; i <= 8; i++) {
      var source = `../../img/foods/food${i}.png`;
      photos.push(source);
    }
    this.state = {
      images: photos,
      photoIndex: 0,
      isOpen: false,
    }
  }




  render() {

    const { photoIndex, isOpen, images } = this.state;

    return (
        <div id="gallery">
          {images.map((photo, index) => (
            <div className="items" key={index}>
            <img src={photo} width="450" height="300" onClick={() => this.setState({ isOpen: true, photoIndex: index })} ></img>
            </div>
          ))}

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Gallery;