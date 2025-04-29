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

      <Card sx={{ mt: 4, width: "100%", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            What I Bringt to the Table
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
            Explore More About What I Do
          </Typography>
          <List>
            <ListItem>
              <WorkIcon sx={{ color: "primary.main", mr: 2 }} />
              <ListItemText primary="Check out my projects to see real-world examples of what I’ve built." />
            </ListItem>
            <ListItem>
              <ContactPageIcon sx={{ color: "primary.main", mr: 2 }} />
              <ListItemText primary="I’m open to new opportunities freelance, contract, or full-time." />
            </ListItem>
            <ListItem>
              <InfoIcon sx={{ color: "primary.main", mr: 2 }} />
              <ListItemText primary="Curious about who I am? Visit the about page for my background and values." />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;
