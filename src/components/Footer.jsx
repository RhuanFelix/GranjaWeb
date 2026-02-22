import { Container } from 'react-bootstrap'

const Footer = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="bg-body-tertiary py-3 mt-4 border-top">
      <Container className="text-center">
        <small className="text-muted">
          © {anoAtual} - GranjaWeb. Todos os direitos reservados.
        </small>
      </Container>
    </footer>
  )
}

export default Footer