import Carousel from 'react-bootstrap/Carousel';

function Carrossel() {
  const imagens = ['foto1.png', 'foto2.png', 'foto3.png'];

  return (
    <Carousel>
      {imagens.map((img, index) => (
        <Carousel.Item key={index}>
          <div
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              height: '800px',
            }}
          ></div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrossel;
