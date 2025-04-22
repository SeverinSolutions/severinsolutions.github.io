import React from 'react';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
    return (
        <>
            <Container className='container' sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Welcome to SeverinSolutions
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    I'm Johan Lundmark, a Software Developer.
                </Typography>
                <Typography variant="body1" paragraph>
                    I previously worked as a nurse now moving my way into IT.
                </Typography>
            </Container>
        </>
    );
};

export default Home;