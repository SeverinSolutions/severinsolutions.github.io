import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50',
        }
    },
    components: {
        MuiIconButton: {
            styleOverrides: {
                root: {
                    '& .MuiTypography-root': {
                        marginLeft: '5px',
                    },
                },
            },
        },
    },
});

export default Theme;