import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
/* import YouTubeIcon from '@mui/icons-material/YouTube'; */

const Contact: React.FC = () => {
    return (
        <Container sx={{ mt: 4, mb: 4, textAlign: 'center' }}>
            <Typography variant="h4" component="h1" gutterBottom>
                Contact Me
            </Typography>
            <img
                src="/images/my-face.png"
                alt="Johan Lundmark"
                style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '20px' }}
            />
            <Typography variant="h6" component="h2" gutterBottom>
                Johan Lundmark
            </Typography>
            <Typography variant="body1" paragraph>
                Feel free to reach out to me through any of the platforms below!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <IconButton
                    component="a"
                    href="https://github.com/SeverinSolutions"
                    target="_blank"
                    aria-label="GitHub"
                >
                    <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/johan-lundmark-12189b218/"
                    target="_blank"
                    aria-label="LinkedIn"
                >
                    <LinkedInIcon fontSize="large" />
                </IconButton>
                {/* <IconButton
                    component="a"
                    href="https://youtube.com/"
                    target="_blank"
                    aria-label="YouTube"
                >
                    <YouTubeIcon fontSize="large" />
                </IconButton> */}
            </Box>
        </Container>
    );
};

export default Contact;