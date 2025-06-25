"use client";

import Container from "@/components/ui/Container";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error caught in root layout:", error);
  }, [error]);

  return (
    <Container>
      <div style={styles.container}>
        <h2>Something went wrong in the application.</h2>

        <button onClick={reset} className="text-gray-200 cursor-pointer underline">Try again</button>
      </div>
    </Container>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: { 
    padding: "2rem",
    textAlign: "center",
    color: "#e00", 
  },
};
