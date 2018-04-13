import blue from 'material-ui/colors/blue';
import deepOrange from 'material-ui/colors/deepOrange';

export default {
    palette: {
        primary: blue,
        secondary: {
            ...deepOrange,
            500: deepOrange['A200'],
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
