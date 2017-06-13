export const getUser = state => {
    return state.user;
}

export const getAccessToken = state => {
    return state.user.access_token;
}

export const getRefreshToken = state => {
    return state.user.refresh_token;
}