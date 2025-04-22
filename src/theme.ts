import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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

export default theme;