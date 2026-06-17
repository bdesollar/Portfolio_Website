import { Container, Typography } from "./ui";
import "../styles/Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container maxWidth="wide">
        <Typography as="p" variant="bodySm" className="footer__text">
          © {currentYear} Benjamin DeSollar
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
