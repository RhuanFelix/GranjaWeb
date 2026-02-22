import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{backgroundImage:"", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{backgroundImage:"", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}></div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{backgroundImage:"", backgroundSize:"cover", backgroundRepeat:"no-repeat"}}></div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrossel;