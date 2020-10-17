


export const loginRootUser = async (payload) => {//--------------------------- LOGIN ROOT USER -------------
	
    const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/auth/root/login", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: payload.email,
			password: payload.password
	 	})
	});

    const user = await res.json();
	return user;
}



export const passwordReset = async (email) => {// ----------------------- PASSWORD RESET REQUEST ----------------
	
    const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/root/requestpasswordreset", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: email
	 	})
	});

    const passwordResetStatus = await res.json();
	return passwordResetStatus;
}


export const passwordResetWithKey = async (payload) => {// ----------------------- PASSWORD RESET ----------------
	
    const res = await fetch(`http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/root/resetpasword/${payload.key}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			password: payload.password
	 	})
	});

    const passwordResetStatus = await res.json();
	return passwordResetStatus;
}


export const getPractice = async (url, token) => {// ----------------------- PASSWORD RESET ----------------
	
    const res = await fetch(url,{
    	method: 'GET',
    	headers: {"Authorization": token}
    });

    const data = await res.json();
	return data;
}

export const approvePractice = async (url, token) => {// ----------------------- APPROVE PRACTICE PATCH ----------------
	
    const res = await fetch(url,{
    	method: 'PATCH',
    	headers: {"Authorization": token},
    	body:{
			approvalStatus: "approved"
		}
    });

    const data = await res.json();
	return data;
}

export const rejectPractice = async (url, token) => {// ----------------------- REJECT PRACTICE PATCH ----------------
	console.log(token)
    const res = await fetch(url,{
    	method: 'PATCH',
    	headers: {"Authorization": token},
    	body:{
			approvalStatus: "rejected"
		}
    });

    const data = await res.json();
	return data;
}















export const loginPractice = async (payload) => {//--------------------------- LOGIN PRACTICE -------------
	
    const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/auth/practices/login", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: payload.email,
			password: payload.password
	 	})
	});

    const user = await res.json();
	return user;
}


export const practicePasswordReset = async (email) => {// ----------------------- PRACTICE PASSWORD RESET REQUEST ----------------
	
    const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/requestpasswordreset", {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			email: email
	 	})
	});

    const passwordResetStatus = await res.json();
	return passwordResetStatus;
}


export const practicePasswordResetWithKey = async (payload) => {// ----------------------- PRACTICE PASSWORD RESET ----------------
	
    const res = await fetch(`http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/practices/resetpassword/${payload.key}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			password: payload.password
	 	})
	});

    const passwordResetStatus = await res.json();
	return passwordResetStatus;
}








export const validateRootToken = async (token) => {//--------------------------VALIDATE TOKEN ---------------------
	
    const res = await fetch("http://practxbestaging-env.eba-6m7puu5w.us-east-2.elasticbeanstalk.com/api/root/checktoken", 
    {
		method: 'GET',
		headers: { 'Authorization': token }
	});

    const user = await res.json();
	return user;
}
