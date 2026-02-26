import React from 'react';
import ModalCadastroGalpoes from '../components/ModalCadastroGalpoes';
import TabelaGalpoes from '../components/TabelaGalpoes';
import { Container } from 'react-bootstrap';

const Galpoes = () => {
  return (
    <main>
      <Container>
        <ModalCadastroGalpoes />
        <TabelaGalpoes />
      </Container>
    </main>
  );
};

export default Galpoes;
