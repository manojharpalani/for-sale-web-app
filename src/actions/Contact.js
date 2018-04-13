import {
    ADD_FAVOURITE,
    FILTER_CONTACT,
    GET_ALL_CONTACT,
    GET_UNSELECTED_ALL_CONTACT,
    HANDLE_REQUEST_CLOSE,
    ON_ADD_CONTACT,
    ON_ALL_CONTACT_SELECT,
    ON_CONTACT_CLOSE,
    ON_CONTACT_SELECT,
    ON_DELETE_CONTACT,
    ON_DELETE_SELECTED_CONTACT,
    ON_FILTER_OPTION_SELECT,
    ON_SAVE_CONTACT,
    ON_TOGGLE_DRAWER,
    UPDATE_SEARCH_USER
} from "constants/ActionTypes";


export const addFavourite = (data) => {
    return {
        type: ADD_FAVOURITE,
        payload: data
    };
};
export const onContactSelect = (data) => {
    return {
        type: ON_CONTACT_SELECT,
        payload: data
    };
};


export const onAddContact = () => {
    return {
        type: ON_ADD_CONTACT,
        payload: ''
    };
};
export const onContactClose = () => {
    return {
        type: ON_CONTACT_CLOSE,
        payload: ''
    };
};
export const onFilterOptionSelect = (option) => {
    return {
        type: ON_FILTER_OPTION_SELECT,
        payload: option
    };
};
export const onSaveContact = (data) => {
    return {
        type: ON_SAVE_CONTACT,
        payload: data
    };
};
export const onDeleteContact = (data) => {
    return {
        type: ON_DELETE_CONTACT,
        payload: data
    };
};
export const onDeleteSelectedContact = () => {
    return {
        type: ON_DELETE_SELECTED_CONTACT,
        payload: ''
    };
};
export const filterContact = (userName) => {
    return {
        type: FILTER_CONTACT,
        payload: userName
    };
};
export const getAllContact = () => {
    return {
        type: GET_ALL_CONTACT,
        payload: ''
    };
};
export const getUnselectedAllContact = () => {
    return {
        type: GET_UNSELECTED_ALL_CONTACT,
        payload: ''
    };
};
export const onAllContactSelect = () => {
    return {
        type: ON_ALL_CONTACT_SELECT,
        payload: ''
    };
};
export const updateContactUser = (userName) => {
    return {
        type: UPDATE_SEARCH_USER,
        payload: userName
    };
};
export const onToggleDrawer = () => {
    return {
        type: ON_TOGGLE_DRAWER,
        payload: ''
    };
};
export const handleRequestClose = () => {
    return {
        type: HANDLE_REQUEST_CLOSE,
        payload: ''
    };
};
