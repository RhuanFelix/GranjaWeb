import { Container } from 'react-bootstrap'

const Footer = () => {
  const anoAtual = new Date().getFullYear()

  return (
    <footer className="footer-custom py-3 mt-4 border-top bg-success">
      <Container className="text-center">
        <small className="text-light">
          © {anoAtual} - GranjaWeb. Todos os direitos reservados.
        </small>
      </Container>
    </footer>
  )
}

export default Footer