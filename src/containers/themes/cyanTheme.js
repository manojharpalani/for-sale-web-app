import cyan from 'material-ui/colors/cyan';
import green from 'material-ui/colors/green';

export default {
    palette: {
        primary: cyan,
        secondary: {
            ...green,
            500: green['A200'],
        }
    },
    status: {
        danger: 'orange',
    },
    typography: {
        button: {
            fontWeight: 400,
            textAlign: 'capitalize'
        },
    },
};
