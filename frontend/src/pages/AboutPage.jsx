import React from "react";
import { Container, Typography, Box } from "@mui/material";

function AboutPage() {
  return (
    <Container
      maxWidth="md"
      style={{
        backgroundColor: "#0e3056",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        About What2Watch
      </Typography>
      <Box mb={4}>
        <Typography variant="body1">
          What2Watch is a film recommendation system that allows users to
          explore movies, discover genres, and manage their favorite movies
          seamlessly.
        </Typography>
      </Box>
      <Box mb={4}>
        <Typography variant="h5">Features</Typography>
        <ul style={{ textAlign: "left", marginLeft: "20px" }}>
          <li>List movies from a database.</li>
          <li>Sort movies by release year.</li>
          <li>CRUD operations: Add, edit, or delete movies.</li>
          <li>User-friendly interface for easy navigation.</li>
        </ul>
      </Box>
      <Box>
        <Typography variant="h6">Developed by:</Typography>
        <Typography variant="body2">
          Betül Turan 220229073 - 2024
        </Typography>
      </Box>
    </Container>
  );
}

export default AboutPage;
