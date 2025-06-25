import Container from "@/components/ui/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <Container>
      <div style={styles.container}>
        <h1>404 - Page Not Found</h1>
        <p>{`The page you're looking for doesn't exist.`}</p>
        <Link href="/" style={styles.link}>
          Go to Home
        </Link>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center" as const,
  },
  link: {
    color: "#0070f3",
    textDecoration: "underline",
  },
};
