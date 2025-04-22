import React from 'react';
import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
    return (
        <>
            <Container className='container' sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    About Page
                </Typography>
            </Container>
        </>
    );
};

export default About;