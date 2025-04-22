import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Projects: React.FC = () => {
    return (
        <>
            <Container className='container' sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to SeverinSolutions (Projects)
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    I'm Johan Lundmark, a Software Developer.
                </Typography>
                <Typography variant="body1" paragraph>
                    This is a brief introduction about yourself. You can mention your skills, interests, and what you are passionate about.
                </Typography>
                <Button variant="contained" color="primary" href="#projects">
                    View My Projects
                </Button>
            </Container>
        </>
    );
};

export default Projects;