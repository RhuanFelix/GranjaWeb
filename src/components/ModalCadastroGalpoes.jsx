import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);
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
    fetch("http://localhost:3000/galpoes", { method: 'POST', body: JSON.stringify(galpao) });
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Adicionar Galpão
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adicionar Galpão</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="nome"
                value={galpao.nome}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Quantidade de frangos</Form.Label>
              <Form.Control
                type="number"
                name="qtdFrangos"
                value={galpao.qtdFrangos}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Quantidade de comedouros</Form.Label>
              <Form.Control
                type="number"
                name="qtdComedouros"
                value={galpao.qtdComedouros}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Quantidade de bebedouros</Form.Label>
              <Form.Control
                type="number"
                name="qtdBebedouros"
                value={galpao.qtdBebedouros}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Quantidade de ventiladores</Form.Label>
              <Form.Control
                type="number"
                name="qtdVentiladores"
                value={galpao.qtdVentiladores}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Quantidade de exaustores</Form.Label>
              <Form.Control
                type="number"
                name="qtdExaustores"
                value={galpao.qtdExaustores}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Quantidade de responsáveis</Form.Label>
              <Form.Control
                type="number"
                name="qtdResponsaveis"
                value={galpao.qtdResponsaveis}
                onChange={handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
              <Form.Label>Presença de termômetro de ambiente </Form.Label>
              <Form.Control
                type="text"
                name="presencaTermometro"
                value={galpao.presencaTermometro}
                onChange={handleChange}
                autoFocus
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

export default Example;
