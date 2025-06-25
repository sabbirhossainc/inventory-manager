import Container from "@/components/ui/Container";

export default function Loading() {
  return (
    <Container>
      <div style={styles.container}>
        <div style={styles.spinner}></div>
        <p>Loading the app...</p>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    height: "20vh",
    fontSize: "1.2rem",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "5px solid #ccc",
    borderTop: "5px solid #000",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};
