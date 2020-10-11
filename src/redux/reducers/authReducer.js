import * as t from "../constants";


const initialState = {
	user:{},
	token:""
};

export default function authReducer (state = initialState, action){
	switch(action.type){
		case t.ROOT_USER_LOGIN:
			state = {...state, token:action.token, user:action.user}
			return state;

		case t.USER_LOGOUT:
			state = {...state, token:"", user:{}}
			return state;
		default:
			return state;
	}
}
