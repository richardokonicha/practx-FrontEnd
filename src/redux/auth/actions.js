import * as t from "./constants";


/*--------------------------LOG IN ROOT USER ------------------------*/

export const loginRootUser = (email, password, router) => {

    return{
        type: t.ROOT_LOGIN_WATCHER,
        payload: { email, password, router }     
    }
};

export const loginRootUserSuccess = (userData) => {
    return{
        type: t.ROOT_USER_LOGIN,
        payload: userData   
    }
};


/*-------------------------- LOG OUT ROOT USER-------------------------------*/

export const logoutUser = () => {

    return {
        type: t.ROOT_USER_LOGOUT
    }
};

export const logoutSaga = (router) => {

    return {
        type: t.LOGOUT_WATCHER,
        payload: router
    }
    
};

/* --------------------------- ROOT PASSWORD RESET ---------------------------*/


export const forgetPasswordRequestSaga = (email) => {
    
    return{
        type: t.ROOT_USER_PASSWORD_RESET_REQ_WATCHER,
        payload: { email }
    }
    
}

export const forgetPasswordRequest = (passwordResetStatus) => ({
    type: t.ROOT_USER_PASSWORD_RESET_REQ,
    payload: passwordResetStatus
});

/*------------- ROOT PASSWORD RESET WITH KEY ACTIONS -----------------*/

export const passwordResetWithKey = (passwordResetMessage) => ({
    type: t.ROOT_USER_PASSWORD_RESET,
    payload: passwordResetMessage
});

export const passwordResetWithKeySaga = (passwordResetKey, newPassword) => ({
    type: t.ROOT_PASSWORD_RESET_WATCHER,
    payload: {
        password: newPassword,
        key: passwordResetKey
    }
});















/*--------------------------LOG IN PRACTICE ------------------------*/

export const loginPractice = (email, password, router) => {

    return {
        type: t.PRACTICE_LOGIN_WATCHER,
        payload: { email, password, router }
    }
    
};

export const loginPracticeSuccess = (userData) => {

    console.log("Reducer action for login called ")

    return {
        type: t.PRACTICE_USER_LOGIN,
        payload: userData    
    }
    
};


export const logoutPractice = () => {

    return {
        type: t.PRACTICE_USER_LOGOUT
    }
};

export const logoutPracticeSaga = (router) => {

    return {
        type: t.PRACTICE_LOGOUT_WATCHER,
        payload: router
    }
    
};



/* --------------------------- PRACTICE PASSWORD RESET ---------------------------*/


export const practiceForgetPasswordRequestSaga = (email) => {
    
    return{
        type: t.PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER,
        payload: { email }
    }
    
}

export const practiceForgetPasswordRequest = (passwordResetStatus) => ({
    type: t.PRACTICE_USER_PASSWORD_RESET_REQ,
    payload: passwordResetStatus
});

/*------------- PRACTICE PASSWORD RESET WITH KEY ACTIONS -----------------*/

export const practicePasswordResetWithKey = (passwordResetMessage) => ({
    type: t.PRACTICE_USER_PASSWORD_RESET,
    payload: passwordResetMessage
});

export const practicePasswordResetWithKeySaga = (passwordResetKey, newPassword) => ({
    type: t.PRACTICE_PASSWORD_RESET_WATCHER,
    payload: {
        password: newPassword,
        key: passwordResetKey
    }
});





export const apiError = (error) => ({
    type: API_FAILED,
    payload: error
});
