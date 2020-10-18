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


/* --------------------------- PRACTICE ADD STAFF ---------------------------*/

export const practiceAddStaffSaga = (newStaffData) => ({
    type: t.PRACTICE_ADD_STAFF_WATCHER,
    payload: newStaffData
})

export const practiceAddStaffSuccess = () =>{

    return {
        type: t.PRACTICE_ADD_STAFF_SUCCESS,
    }
    
}

export const addStaffStatusToEmpty = () =>{

    return{
        type: t.PRACTICE_ADD_STAFF_EMPTY
    }
    
}


















/*----------------------------- USER / STAFF OR ADMIN USER -----------------------------------------*/

/*--------------------------LOG IN USER ------------------------*/

export const loginUserSaga = (email, password, router) => {

    return {
        type: t.USER_LOGIN_WATCHER,
        payload: { email, password, router }
    }
    
};

export const loginUserSuccess = (userData) => {

    return {
        type: t.USER_LOGIN,
        payload: userData    
    }
    
};

/*--------------------------LOGOUT USER ------------------------*/

export const logoutStaffUser = () => {

    return {
        type: t.USER_LOGOUT
    }
};

export const logoutStaffUserSaga = (router) => {

    return {
        type: t.USER_LOGOUT_WATCHER,
        payload: router
    }
    
};


/* --------------------------- USER PASSWORD RESET ---------------------------*/


export const userForgetPasswordRequestSaga = (email) => {
    
    return{
        type: t.USER_PASSWORD_RESET_REQUEST_WATCHER,
        payload: { email }
    }
    
}

export const userForgetPasswordRequest = (passwordResetStatus) => ({
    type: t.USER_PASSWORD_RESET_REQUEST,
    payload: passwordResetStatus
});

/*------------- USET PASSWORD RESET WITH KEY ACTIONS -----------------*/

export const userPasswordResetWithKey = (passwordResetMessage) => ({
    type: t.USER_PASSWORD_RESET_SUCCESSFUL,
    payload: passwordResetMessage
});

export const userPasswordResetWithKeySaga = (passwordResetKey, newPassword) => ({
    type: t.USER_PASSWORD_RESET_WATCHER,
    payload: {
        password: newPassword,
        key: passwordResetKey
    }
});








export const apiError = () => {
    console.log("Api Action called -----------")
    return {type: t.API_FAILED}
};

export const apiErrorReset = () => ({
    type: t.API_ERROR_RESET
});
