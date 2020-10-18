import * as t from "./constants";



 
const initialState = {
	user:{},
	passwordResetStatus:"",
	addStaff:"",
	error: false
};

export default function authReducer (state = initialState, action){

	switch(action.type){

		case t.ROOT_USER_LOGIN:

			state = {...state, user:action.payload};
			
			return state;

		case t.ROOT_USER_LOGOUT:

			state = {...state, user:{}}
			return state;
			

		case t.ROOT_USER_PASSWORD_RESET_REQ:

			state = {...state, passwordResetStatus:action.payload}
			return state;

		case t.ROOT_USER_PASSWORD_RESET:

			state = {...state, passwordResetStatus:action.payload}
			return state;




		case t.PRACTICE_USER_LOGIN:

			state = {...state, user:action.payload};
			return state;

		case t.PRACTICE_USER_LOGOUT:

			state = {...state, user:{}}
			return state;
			

		case t.PRACTICE_USER_PASSWORD_RESET_REQ:

			state = {...state, passwordResetStatus:action.payload}
			return state;

		case t.PRACTICE_USER_PASSWORD_RESET:

			state = {...state, passwordResetStatus:action.payload}
			return state;

		case t.PRACTICE_ADD_STAFF_SUCCESS:

			state = {...state, addStaff: true}
			return state;

		case t.PRACTICE_ADD_STAFF_EMPTY:
			state = {...state, addStaff:false}
			return state;

		case t.USER_LOGIN:

			state = {...state, user:{}}
			return state;

		case t.USER_LOGOUT:

			state = {...state, user:{}}
			return state;

		case t.USER_PASSWORD_RESET_REQUEST:

			state = {...state, passwordResetStatus:action.payload}
			return state;
			
		case t.USER_PASSWORD_RESET_SUCCESSFUL:

			state = {...state, passwordResetStatus:action.payload}
			return state;
			


		case t.API_FAILED:

			state = {...state, error: true}
			return state;

		case t.API_ERROR_RESET:
			state = {...state, error: false}
			console.log("----------- Error -----------", state.error)
			return state;

		
		default:
			return state;
			
	}
}
