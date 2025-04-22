import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box sx={{ p: 2, textAlign: 'center', backgroundColor: '#f8f8f8' }}>
            <Typography variant="body2" color="textSecondary">
                © {new Date().getFullYear()} SeverinSolutions. All rights reserved.
            </Typography>
        </Box>
    );
};

export default Footer;