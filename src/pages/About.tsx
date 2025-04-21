import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                About Page
            </Typography>
            <Typography variant="body1">
                This is the About Page!
            </Typography>
        </Container>
    );
};

export default About;