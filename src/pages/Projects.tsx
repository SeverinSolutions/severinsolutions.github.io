import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ProjectCard from "../components/ProjectCard";
import ArchiveProjectData from "../assets/ArchiveProjectData";
import CurrentProjectData from "../assets/CurrentProjectData";
import LegacyProjectData from "../assets/ConfidentialData";
import BuildIcon from "@mui/icons-material/Build";
import FolderIcon from "@mui/icons-material/Folder";
import LockIcon from "@mui/icons-material/Lock";

const Projects: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Work Showcase
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        A selection of my work, from current development to archived and
        professional contributions.
      </Typography>

      <Card
        sx={{
          mt: 4,
          boxShadow: 0,
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#e5e5e5",
        }}
      >
        <CardContent>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <BuildIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">In Progress</Typography>
          </Box>
          <Typography variant="body2" mb={2} sx={{ textAlign: "center" }}>
            I’m currently working on the following project(s).
          </Typography>
          <Grid container spacing={2}>
            {CurrentProjectData.map((project, index) => (
              <Grid key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <FolderIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Project Archive</Typography>
          </Box>
          <Typography variant="body2" mb={2}>
            A collection of completed or shelved personal projects.
          </Typography>
          <Grid container spacing={2}>
            {ArchiveProjectData.map((project, index) => (
              <Grid key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>

      <Card sx={{ mt: 4, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <LockIcon sx={{ color: "primary.main", mr: 1 }} />
            <Typography variant="h6">Confidential</Typography>
          </Box>
          <Typography variant="body2" mb={2}>
            Projects from professional environments, which are confidential.
          </Typography>
          <Grid container spacing={2}>
            {LegacyProjectData.map((project, index) => (
              <Grid key={index}>
                <ProjectCard {...project} />
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};
export default Projects;
