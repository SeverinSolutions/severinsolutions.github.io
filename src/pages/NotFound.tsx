import React from "react";
import { Typography, Container } from "@mui/material";

const NotFound: React.FC = () => (
  <Container sx={{ padding: 4 }}>
    <Typography variant="h3" gutterBottom>
      404 - Page Not Found
    </Typography>
    <Typography>
      Oops! The page you're looking for doesn't exist.
    </Typography>
  </Container>
);

export default NotFound;
