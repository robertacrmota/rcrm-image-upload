import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#FFB74D',
            main: '#FF9800',
            dark: '#F57C00'
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