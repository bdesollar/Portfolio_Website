import { Container, Button, Typography, PageShell } from "./ui";
import "../styles/NotFound.css";

function NotFound() {
  return (
    <PageShell className="not-found">
      <Container maxWidth="sm" className="not-found__inner">
        <Typography as="h1" variant="display" className="not-found__code">
          404
        </Typography>
        <Typography as="h2" variant="h2" className="not-found__title">
          Page Not Found
        </Typography>
        <Typography as="p" variant="body" className="not-found__desc">
          This Page Could Not Be Found
        </Typography>
        <Button to="/" variant="primary">
          Return Home
        </Button>
      </Container>
    </PageShell>
  );
}

export default NotFound;
