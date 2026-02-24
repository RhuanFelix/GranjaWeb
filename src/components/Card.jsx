import { Card, Container, Row, Col } from 'react-bootstrap';

const GranjaCards = () => {
return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Sobre a GranjaWeb</h2>

      <Row className="g-4">

        {/* Card 1 */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🐔 Nossa História</Card.Title>
              <Card.Text>
                A GranjaWeb nasceu com o propósito de oferecer ovos frescos e
                de alta qualidade, unindo tradição e tecnologia na produção.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🥚 Qualidade Garantida</Card.Title>
              <Card.Text>
                Todos os ovos passam por um rigoroso controle de qualidade,
                garantindo frescor, segurança e padronização.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col md={4}>
          <Card className="h-100 shadow-sm">
            <Card.Body>
              <Card.Title>🚚 Entrega Rápida</Card.Title>
              <Card.Text>
                Realizamos entregas programadas em Guarabira e região,
                garantindo eficiência e compromisso com nossos clientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
};

export default GranjaCards;
