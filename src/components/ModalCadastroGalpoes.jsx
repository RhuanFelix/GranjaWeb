import { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { IoSearchSharp } from "react-icons/io5";

function Example() {
  const [show, setShow] = useState(false);
  const [busca, setBusca] = useState("");
  const [galpao, setGalpao] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setGalpao((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(galpao);
  };

  return (
    <Container className="mt-4">

      <Row className="mb-4">
        <Col xs={6}>
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Buscar Galpão
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do galpão"
                  value={busca}
                  onChange={(e) => setBusca(e.target.value)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>

        <Col xs={3} className="d-flex align-items-center">
          <Button variant="primary">
            <IoSearchSharp />
          </Button>
        </Col>
      </Row>

      <Button xs={3} className="mb-3" variant="primary" onClick={handleShow}>
        Adicionar Galpão
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Galpão</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>
          <Modal.Body>

            <Form.Group className="mb-3">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={galpao.nome || ""}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de frangos</Form.Label>
              <Form.Control
                type="number"
                name="qtdFrangos"
                value={galpao.qtdFrangos || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de comedouros</Form.Label>
              <Form.Control
                type="number"
                name="qtdComedouros"
                value={galpao.qtdComedouros || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de bebedouros</Form.Label>
              <Form.Control
                type="number"
                name="qtdBebedouros"
                value={galpao.qtdBebedouros || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de ventiladores</Form.Label>
              <Form.Control
                type="number"
                name="qtdVentiladores"
                value={galpao.qtdVentiladores || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de exaustores</Form.Label>
              <Form.Control
                type="number"
                name="qtdExaustores"
                value={galpao.qtdExaustores || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Quantidade de responsáveis</Form.Label>
              <Form.Control
                type="number"
                name="qtdResponsaveis"
                value={galpao.qtdResponsaveis || ""}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Presença de termômetro</Form.Label>
              <Form.Control
                type="text"
                name="presencaTermometro"
                value={galpao.presencaTermometro || ""}
                onChange={handleChange}
              />
            </Form.Group>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" variant="primary">
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

    </Container>
  );
}

export default Example;