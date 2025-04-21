import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Home Page
            </Typography>
            <Typography variant="body1">
                Welcome to the Home Page!
            </Typography>
        </Container>
    );
};

export default Home;