import {
    FILTER_CONTACT,
    FILTER_USERS,
    ON_HIDE_LOADER,
    ON_SELECT_USER,
    ON_TOGGLE_DRAWER,
    SUBMIT_COMMENT,
    UPDATE_MESSAGE_VALUE,
    UPDATE_SEARCH_CHAT_USER,
    USER_INFO_STATE
} from "constants/ActionTypes";


export const filterContacts = (userName) => {
    return {
        type: FILTER_CONTACT,
        payload: userName
    };
};

export const filterUsers = (userName) => {
    return {
        type: FILTER_USERS,
        payload: userName
    };
};


export const onSelectUser = (user) => {
    return {
        type: ON_SELECT_USER,
        payload: user
    };
};

export const submitComment = () => {
    return {
        type: SUBMIT_COMMENT,
    };
};

export const hideLoader = () => {
    return {
        type: ON_HIDE_LOADER,
    };
};

export const userInfoState = (state) => {
    return {
        type: USER_INFO_STATE,
        payload: state
    };
};

export const updateMessageValue = (message) => {
    return {
        type: UPDATE_MESSAGE_VALUE,
        payload: message
    };
};


export const updateSearchChatUser = (userName) => {
    return {
        type: UPDATE_SEARCH_CHAT_USER,
        payload: userName
    };
};
export const onChatToggleDrawer = () => {
    return {
        type: ON_TOGGLE_DRAWER
    };
};