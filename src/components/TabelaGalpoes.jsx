import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function TabelaGalpoes() {
  const [galpoes, setGalpoes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/galpoes')
      .then((res) => res.json())
      .then((data) => setGalpoes(data));
  }, []);


  return (
    <>
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
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {galpoes.map((galpao, index) => (
          <tr key={galpao.id}>
            <td>{index + 1}</td>
            <td>{galpao.nome}</td>
            <td>{galpao.qtdFrangos}</td>
            <td>{galpao.qtdComedouros}</td>
            <td>{galpao.qtdBebedouros}</td>
            <td>{galpao.qtdVentiladores}</td>
            <td>{galpao.qtdExaustores}</td>
            <td>{galpao.qtdResponsaveis}</td>
            <td>{galpao.presencaTermometro}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </>
);
}

export default TabelaGalpoes;
