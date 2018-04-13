import deepOrange from 'material-ui/colors/deepOrange';
import lightBlue from 'material-ui/colors/lightBlue';

export default {
    palette: {
        primary: deepOrange,
        secondary: {
            ...lightBlue,
            500: lightBlue['A200'],
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
