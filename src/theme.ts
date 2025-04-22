import { createTheme } from '@mui/material/styles';

const Theme = createTheme({
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