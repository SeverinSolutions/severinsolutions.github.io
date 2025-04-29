import React from "react";
import { Container, Typography, Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const Contact: React.FC = () => {
  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" marginBottom={2}>
        Contact
      </Typography>

      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <img
          src="/images/my-face.png"
          alt="Johan Lundmark"
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            objectFit: "cover",
            border: "6px solid lightblue",
            boxShadow: "0 5px 12px rgba(0, 0, 0, 0.3)",
          }}
        />
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Johan Lundmark
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#0077cc" }}>
            <strong>Software Developer</strong>
          </Typography>
          <Typography variant="subtitle1">Gothenburg</Typography>
        </Box>
      </Box>

      <Box mt={3}>
        <Box display="flex" alignItems="center" mb={1}>
          <EmailIcon sx={{ mr: 1 }} />
          <Typography variant="body1">lundmark.johan.91@gmail.com</Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography variant="body1">+46 (0) 73-315 75 22</Typography>
        </Box>
      </Box>

      <Box mt={4}>
        <Typography variant="body2" gutterBottom>
          Feel free to check out the links below.
        </Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <GitHubIcon
            fontSize="large"
            href="https://github.com/SeverinSolutions"
            target="_blank"
            sx={{ cursor: "pointer" }}
          />
          <LinkedInIcon
            fontSize="large"
            href="https://www.linkedin.com/in/johan-lundmark-12189b218/"
            target="_blank"
            sx={{ cursor: "pointer", color: "#0077b5" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
