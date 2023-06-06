import Carousel from 'react-bootstrap/Carousel';
import './Slider.css';

function Slider() {
  return (
    <div className="slider-container">
      <Carousel>
        <Carousel.Item>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src="/slider/image1.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className="slider-caption">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src="/slider/image2.png"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className="slider-caption">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slider-image-container">
            <img
              className="slider-image"
              src="/slider/image3.jpg"
              alt="Third slide"
            />
          </div>
          <Carousel.Caption className="slider-caption">
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;