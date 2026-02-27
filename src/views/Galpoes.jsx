import { useEffect, useState } from "react";
import { Button, Col, Form, Modal, Row, Table, Toast } from "react-bootstrap";

const Galpoes = () => {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({});
  const [busca, setBusca] = useState("");
  const [galpoes, setGalpoes] = useState([]);
  const [toastShow, setToastShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    fetch("http://localhost:3000/galpoes", {
      method: "POST",
      body: JSON.stringify(inputs),
    })
      .then(() => {
        buscarGalpoes();
        setInputs({});
        setShow(false);
        setToastShow(true);
        setTimeout(() => setToastShow(false), 3000);
      })
      .catch((error) => console.log(error));
  };

  const buscarGalpoes = () => {
    fetch("http://localhost:3000/galpoes")
      .then((res) => res.json())
      .then((data) => setGalpoes(data))
      .catch((error) => console.log(error));
  };

  let galpoesFiltrados = galpoes.filter((galpao) => galpao.nome === busca);

  useEffect(() => {
    buscarGalpoes();
  }, []);

  return (
    <>
      {toastShow && (
        <Toast bg="success" className="bg-opacity-25 ms-auto">
          <Toast.Body>Galpão cadastrado com sucesso</Toast.Body>
        </Toast>
      )}
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
                value={inputs.nome}
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
                value={inputs.qtdFrangos}
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
                value={inputs.qtdComedouros}
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
                value={inputs.qtdBebedouros}
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
                value={inputs.qtdVentiladores}
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
                value={inputs.qtdExaustores}
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
                value={inputs.qtdResponsaveis}
                onChange={handleChange}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="presencaTermometro">
              <Form.Label>Presença de termômetro de ambiente </Form.Label>
              <Form.Select
                name="presencaTermometro"
                value={inputs.presencaTermometro}
                onChange={handleChange}
                aria-label="Default select example"
                required
              >
                <option value="">Escolha entre as opções</option>
                <option value="sim">Sim</option>
                <option value="não">Não</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Por favor, selecione uma opção
              </Form.Control.Feedback>
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

      {busca === "" ? (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Frangos</th>
              <th>Comedouros</th>
              <th>Bebedouros</th>
              <th>Ventiladores</th>
              <th>Exaustores</th>
              <th>Responsáveis</th>
              <th>Termômetro</th>
            </tr>
          </thead>
          <tbody>
            {galpoes.map((galpao, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{galpao.nome}</td>
                <td>{galpao.qtdFrangos}</td>
                <td>{galpao.qtdComedouros}</td>
                <td>{galpao.qtdBebedouros}</td>
                <td>{galpao.qtdVentiladores}</td>
                <td>{galpao.qtdExaustores}</td>
                <td>{galpao.qtdResponsaveis}</td>
                <td>{galpao.presencaTermometro}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Table striped bordered hover responsive className="mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Frangos</th>
              <th>Comedouros</th>
              <th>Bebedouros</th>
              <th>Ventiladores</th>
              <th>Exaustores</th>
              <th>Responsáveis</th>
              <th>Termômetro</th>
            </tr>
          </thead>
          <tbody>
            {galpoesFiltrados.map((galpao, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{galpao.nome}</td>
                <td>{galpao.qtdFrangos}</td>
                <td>{galpao.qtdComedouros}</td>
                <td>{galpao.qtdBebedouros}</td>
                <td>{galpao.qtdVentiladores}</td>
                <td>{galpao.qtdExaustores}</td>
                <td>{galpao.qtdResponsaveis}</td>
                <td>{galpao.presencaTermometro}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Galpoes;
