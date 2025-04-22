import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import ProjectsData from "../assets/data/ProjectsData";


const Projects: React.FC = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                My Projects
            </Typography>
            <Grid container spacing={2}>
                {ProjectsData.map((project, index) => (
                    <Grid key={index}>
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Projects;