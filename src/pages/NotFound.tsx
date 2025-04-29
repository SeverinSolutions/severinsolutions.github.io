import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 8,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" gutterBottom>
        😕 Oops, page not found!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        The page you're looking for doesn’t exist or was moved.
      </Typography>
    </Container>
  );
};

export default NotFound;
