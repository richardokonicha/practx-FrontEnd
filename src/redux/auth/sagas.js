import { call, put, takeEvery, takeLatest, all, fork} from 'redux-saga/effects';
import * as t from "./constants";
import * as Api from '../Api.js';
import * as Actions from "./actions";



/*------------------------LOGIN SAGA --------------------------------*/

function* loginRootUser(action) {

   try {

		const user = yield call(Api.loginRootUser, action.payload);

    if (user.message === "Login successful!"){


        yield put(Actions.loginRootUserSuccess(user));

        yield call(()=>{

                action.payload.router.push({
                  pathname:"/dashboard/dashboard"
                })

            }
        );

      }else{

          yield call(()=>{

                  action.payload.router.push({
                    pathname:"/"
                  })

              }
          );
      }
    	

   } catch (e) {
	   console.log(e, "Can not login from saggaggaggag,")
   }
}

function* rootLoginWatcher() { /* --------------- LOGIN WATCHER ---------------------------*/


  yield takeLatest(t.ROOT_LOGIN_WATCHER, loginRootUser);

}









/*------------------------LOGOUT SAGA --------------------------------*/


function* logoutUser(action){
  
  try{

    yield put(Actions.logoutUser());

    yield call(()=>action.payload.push("/"));

  }catch(e){
    console.log("Error Trying to LogOut")
  }
  
}

function* logoutWatcher() { /* --------------- LOGOUT WATCHER ---------------------------*/

  yield takeLatest(t.LOGOUT_WATCHER, logoutUser);

}








/*-------------------------------------------- ROOT PASSWORD RESET ------------------------------------*/


function* passwordReset(action){

  const {message} = yield call(Api.passwordReset, action.payload.email);
  
  try{

    yield put(Actions.forgetPasswordRequest(message));

  }catch(e){
    console.log("password reset request error" , e)
  }
  
}

function* passwordResetWatcher() { /* --------------- PASSWORD RESET REQUEST WATCHER ---------------------------*/

  yield takeLatest(t.ROOT_USER_PASSWORD_RESET_REQ_WATCHER, passwordReset);

}




function* passwordResetWithKey(action){/*-------------------------- MAIN PASSWORD RESET WITH KEY FROM EMAIL -----------------*/

  
  try{

    const {message} = yield call(Api.passwordResetWithKey, action.payload);

    if(message === "Password changed successfully!"){
      yield put(Actions.passwordResetWithKey(message));
    }else{
      console.log("message is:::", message)
    }
    

  }catch(e){
    console.log("password reset error" , e)
  }
  
}


function* passwordResetWithKeyWatcher() { /* --------------- PASSWORD RESET WITH KEY WATCHER ---------------------------*/
  
  yield takeLatest(t.ROOT_PASSWORD_RESET_WATCHER, passwordResetWithKey);

}





















/*------------------------PRACTICE LOGIN SAGA --------------------------------*/

function* loginPractice(action) {

   try {

    const user = yield call(Api.loginPractice, action.payload);


    if (user.message === "Login successful!"){


        yield put(Actions.loginPracticeSuccess(user));

        yield call(()=>{

                action.payload.router.push({
                  pathname:"/practice/dashboard/dashboard"
                })

            }
        );

      }else{

          yield call(()=>{

                  action.payload.router.push({
                    pathname:"/practice/auth/login"
                  })

              }
          );
      }
      

   } catch (e) {
     console.log(e, "Can not login PRACTICE from saggaggaggag")
   }
}

function* practiceLoginWatcher() { /* --------------- PRACTIVE LOGIN WATCHER ---------------------------*/

  yield takeLatest(t.PRACTICE_LOGIN_WATCHER, loginPractice);

}


/*------------------------LOGOUT PRACTICE --------------------------------*/


function* logoutPractice(action){
  
    yield put(Actions.logoutPractice());
    
    yield call(()=>action.payload.push("/practice/auth/login"));

  
}

function* logoutPracticeSaga() { /* --------------- LOGOUT PRACTICE WATCHER ---------------------------*/


  yield takeLatest(t.PRACTICE_LOGOUT_WATCHER, logoutPractice);

}


/*-------------------------------------------- PRACTICE PASSWORD RESET ------------------------------------*/


function* passwordResetPractice(action){

  
  
  try{

    const {message} = yield call(Api.practicePasswordReset, action.payload.email);

    if(message === "A link to reset your password has been sent to your mail. Please note that the link is only valid for one hour."){

        yield put(Actions.practiceForgetPasswordRequest(message));
    }

  }catch(e){
    console.log("password reset request error" , e)
  }
  
}

function* passwordResetPracticeWatcher() { /* --------------- PRACTICE PASSWORD RESET REQUEST WATCHER ---------------------------*/

  yield takeLatest(t.PRACTICE_USER_PASSWORD_RESET_REQ_WATCHER, passwordResetPractice);

}




function* passwordResetPracticeWithKey(action){/*-------------------------- PRACTICE MAIN PASSWORD RESET WITH KEY FROM EMAIL -----------------*/
  
  try{

    const {message} = yield call(Api.practicePasswordResetWithKey, action.payload);

    if(message === "Password changed successfully!"){
      yield put(Actions.practicePasswordResetWithKey(message));
    }else{
      console.log("message is:::", message)
    }
    

  }catch(e){
    console.log("password reset error" , e)
  }
  
}


function* passwordResetWithKeyPracticeWatcher() { /* --------------- PRACTICE PASSWORD RESET WITH KEY WATCHER ---------------------------*/
  
  yield takeLatest(t.PRACTICE_PASSWORD_RESET_WATCHER, passwordResetPracticeWithKey);

}


function* practiceAddStaff (action){ // -------------- PRACTICE ASS STAFF -------

    try{

      const addStaff = yield call( Api.practiceAddStaff ,action.payload);

      if(addStaff.message === "User has been added successfully, they will get a mail with a link to set up their account."){
      
            yield put(Actions.practiceAddStaffSuccess());

      }else{
        
        console.log("Error in saga-----------")
        yield put(Actions.apiError())
      }

    }catch(e){
        
    }

    yield put(Actions.addStaffStatusToEmpty())
}


function* practiceAddStaffWatcher (){

    yield takeLatest(t.PRACTICE_ADD_STAFF_WATCHER, practiceAddStaff);
}

















/*------------------------ USER LOGIN SAGA --------------------------------*/

function* loginStaffUser(action) {

  console.log(action.payload)

   try {

    const user = yield call(Api.loginStaffUser, action.payload);


    if (user.message === "Login successful!"){


        yield put(Actions.loginUserSuccess(user));

        yield call(()=>{

                action.payload.router.push({
                  pathname:"/user/dashboard/dashboard"
                })

            }
        );

      }else{

          yield call(()=>{

                  action.payload.router.push({
                    pathname:"/user/auth/login"
                  })

              }
          );
      }
      

   } catch (e) {
     console.log(e, "Can not login user from saggaggaggag")
   }
}

function* userLoginWatcher() { /* --------------- USER LOGIN WATCHER ---------------------------*/

  yield takeLatest(t.USER_LOGIN_WATCHER, loginStaffUser);

}



/*------------------------LOGOUT USER --------------------------------*/


function* logoutStaffUser(action){
  
    yield put(Actions.logoutStaffUser());
    
    yield call(()=>action.payload.push("/user/auth/login"));

  
}

function* logoutUserSaga() { /* --------------- LOGOUT USER WATCHER ---------------------------*/


  yield takeLatest(t.USER_LOGOUT_WATCHER, logoutStaffUser);

}



/*-------------------------------------------- USER PASSWORD RESET REQUEST ------------------------------------*/


function* passwordResetUser(action){

  
  
  try{

    const {message} = yield call(Api.userPasswordReset, action.payload.email);

    if(message === "A link to reset your password has been sent to your mail. Please note that the link is only valid for one hour."){

        yield put(Actions.userForgetPasswordRequest(message));
    }

  }catch(e){
    console.log("password reset request error" , e)
  }
  
}

function* passwordResetUserWatcher() { 

  yield takeLatest(t.USER_PASSWORD_RESET_REQUEST_WATCHER, passwordResetUser);

}


function* passwordResetUserWithKey(action){
  
  try{

    const {message} = yield call(Api.userPasswordResetWithKey, action.payload);

    if(message === "Password changed successfully!"){
      yield put(Actions.userPasswordResetWithKey(message));
    }else{
      console.log("message is:::", message)
    }
    

  }catch(e){
    console.log("password reset error" , e)
  }
  
}


function* passwordResetWithKeyUserWatcher() { 
  
  yield takeLatest(t.USER_PASSWORD_RESET_WATCHER, passwordResetUserWithKey);

}































function* authSaga() {
    yield all([
        fork(rootLoginWatcher),
        fork(logoutWatcher),
        fork(passwordResetWatcher),
        fork(passwordResetWithKeyWatcher),

        fork(practiceLoginWatcher),
        fork(logoutPracticeSaga),
        fork(passwordResetPracticeWatcher),
        fork(passwordResetWithKeyPracticeWatcher),

        fork(practiceAddStaffWatcher),

        fork(userLoginWatcher),
        fork(logoutUserSaga),
        fork(passwordResetUserWatcher),
        fork(passwordResetWithKeyUserWatcher),
    ]);
}


export default authSaga;
