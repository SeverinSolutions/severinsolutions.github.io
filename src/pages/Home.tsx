import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Home: React.FC = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        mt: 4,
        mb: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Welcome
      </Typography>

      <Typography variant="subtitle1" component="h2" gutterBottom>
        I'm Johan Lundmark, a software developer with a background in computer
        science and real-world experience building software in collaborative
        tech teams.
      </Typography>

      <Typography variant="subtitle1" component="h2" gutterBottom>
        I enjoy working on everything from website development and API integrations
        to debugging and solving practical software challenges.
      </Typography>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            What I Bring to the Table
          </Typography>
          <List>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Full-stack experience</strong> across real-world
                    projects
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    A <strong>pragmatic, results-driven approach</strong> to
                    development
                  </Typography>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <Typography variant="body1">
                    <strong>Strong communication</strong> and a collaborative
                    mindset
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            Explore My Projects and Background
          </Typography>
          <List>
            <ListItem>
              <WorkIcon sx={{ color: "primary.main", mr: 2 }} />
              <ListItemText primary="See my portfolio for examples of my recent work and projects." />
            </ListItem>
            <ListItem>
              <ContactPageIcon sx={{ color: "primary.main", mr: 2 }} />
              <ListItemText primary="Open to opportunities in teams, programs, or projects where I can contribute and grow." />
            </ListItem>
            <ListItem>
              <InfoIcon sx={{ color: "primary.main", mr: 2 }} />
              <ListItemText primary="Visit the about page to learn more about my background and approach." />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
