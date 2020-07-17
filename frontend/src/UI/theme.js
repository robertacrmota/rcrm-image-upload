import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffb74d',
            main: '#ff9800',
            dark: '#f57c00'
        },
        secondary: {
            main: '#1A535C',
        },
        tertiary: {
            main: '#E2E2E2',
        },
    },
});

export default theme;