import React from 'react';
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';


const Home: React.FC = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Welcome to SeverinSolutions
            </Typography>
            <Typography variant="subtitle1" component="h2" gutterBottom align="center">
                Hello, I'm Johan Severin Lundmark, a software developer with a background in computer science and hands-on experience from working with multiple tech teams.
            </Typography>
            <Typography variant="body1" component="h2" gutterBottom align="center">
                I'm now freelancing and open to new opportunities, whether it's short-term projects, long-term collaborations, or a full-time role.
            </Typography>

            <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                    What I bring to the table:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Real-world development experience across the stack" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="A pragmatic, results-driven approach" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Strong communication and a collaborative mindset" />
                    </ListItem>
                </List>
            </Box>

            <Box sx={{ mt: 4 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                    Let's Connect:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Take a look at my projects to see what I've built" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="I'm currently available for hire" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Want to know more about me? Head over to the about page" />
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default Home;