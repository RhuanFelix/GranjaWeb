import { useState } from "react";
import { Col, Row, Button, Form, Modal } from "react-bootstrap";
import { IoSearchSharp } from "react-icons/io5";

function ModalCadastroGalpoes() {
  const [show, setShow] = useState(false);
  const [galpao, setGalpao] = useState({});
  const [busca, setBusca] = useState("");

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
    fetch("http://localhost:3000/galpoes", { method: 'POST', body: JSON.stringify(galpao) });
  }

  return (
    <>
      <Row className="mb-4 align-items-center">
        <Col xs={6}>
          <Form>
            <Form.Group as={Row} className="align-items-center">
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

        <Col xs={3} className="d-flex gap-2">
          <Button variant="success">
            <IoSearchSharp />
          </Button>
          <Button variant="success" onClick={handleShow}>
            +
          </Button>
        </Col>
      </Row>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Galpão</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={galpao.nome}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qtdFrangos">
              <Form.Label>Quantidade de frangos</Form.Label>
              <Form.Control
                type="number"
                name="qtdFrangos"
                value={galpao.qtdFrangos}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qtdComedouros">
              <Form.Label>Quantidade de comedouros</Form.Label>
              <Form.Control
                type="number"
                name="qtdComedouros"
                value={galpao.qtdComedouros}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qtdBebedouros">
              <Form.Label>Quantidade de bebedouros</Form.Label>
              <Form.Control
                type="number"
                name="qtdBebedouros"
                value={galpao.qtdBebedouros}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qtdVentiladores">
              <Form.Label>Quantidade de ventiladores</Form.Label>
              <Form.Control
                type="number"
                name="qtdVentiladores"
                value={galpao.qtdVentiladores}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qtdExaustores">
              <Form.Label>Quantidade de exaustores</Form.Label>
              <Form.Control
                type="number"
                name="qtdExaustores"
                value={galpao.qtdExaustores}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="qtdResponsaveis">
              <Form.Label>Quantidade de responsáveis</Form.Label>
              <Form.Control
                type="number"
                name="qtdResponsaveis"
                value={galpao.qtdResponsaveis}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="presencaTermometro">
              <Form.Label>Presença de termômetro de ambiente </Form.Label>
              <Form.Control
                type="text"
                name="presencaTermometro"
                value={galpao.presencaTermometro}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Salvar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalCadastroGalpoes;