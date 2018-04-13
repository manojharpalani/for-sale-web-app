import {DARK_THEME, DRAWER_TYPE, MINI_DRAWER, THEME_COLOR, TOGGLE_COLLAPSED_NAV} from 'constants/ActionTypes';
import {CYAN} from "constants/ThemeColors";

const initialSettings = {
    navCollapsed: false,
    drawerType: MINI_DRAWER,
    themeColor: CYAN,
    darkTheme: false,
};

const settings = (state = initialSettings, action) => {
    switch (action.type) {
        case '@@router/LOCATION_CHANGE':
            return {
                ...state,
                navCollapsed: false
            };
        case TOGGLE_COLLAPSED_NAV:
            return {
                ...state,
                navCollapsed: action.isNavCollapsed
            };
        case DRAWER_TYPE:
            return {
                ...state,
                drawerType: action.drawerType
            };
        case THEME_COLOR:
            return {
                ...state,
                darkTheme: false,
                themeColor: action.color
            };
        case DARK_THEME:
            return {
                ...state,
                darkTheme: !state.darkTheme
            };
        default:
            return state;
    }
};

export default settings;
