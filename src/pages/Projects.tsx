import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import ArchiveProjectData from '../assets/ArchiveProjectData';
import CurrentProjectData from '../assets/CurrentProjectData';
import LegacyProjectData from '../assets/LegacyProjectData';


const Projects: React.FC = () => {
    return (
        <>
            <Container sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    In Progress
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Theses are the projects I'm working on.
                </Typography>
                <Grid container spacing={2}>
                    {CurrentProjectData.map((project, index) => (
                        <Grid key={index}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Project Archive
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    A collection of completed projects.
                </Typography>
                <Grid container spacing={2}>
                    {ArchiveProjectData.map((project, index) => (
                        <Grid key={index}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>

            <Container sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Legacy & Confidential
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                    Projects developed during university or professional work.
                </Typography>
                <Grid container spacing={2}>
                    {LegacyProjectData.map((project, index) => (
                        <Grid key={index}>
                            <ProjectCard {...project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default Projects;