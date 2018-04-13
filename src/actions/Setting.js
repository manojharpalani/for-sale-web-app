import {DARK_THEME, DRAWER_TYPE, THEME_COLOR, TOGGLE_COLLAPSED_NAV} from 'constants/ActionTypes';

export function toggleCollapsedNav(isNavCollapsed) {
    return {type: TOGGLE_COLLAPSED_NAV, isNavCollapsed};
}

export function setDrawerType(drawerType) {
    return {type: DRAWER_TYPE, drawerType};
}

export function setThemeColor(color) {
    return {type: THEME_COLOR, color};
}

export function setDarkTheme() {
    return {type: DARK_THEME};
}
