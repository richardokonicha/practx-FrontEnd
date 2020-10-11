import cookies from 'next-cookies';


export const loginRootUser = async (payload) => {
	// Call an external API endpoint to get posts
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

export const registerRootUser = async (payload) => {
	// Call an external API endpoint to get posts
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

export const validateToken = async (url,token) => {
	// Call an external API endpoint to get posts
    const res = await fetch(url, {
		method: 'POST',
		headers: { 'Authorization': token }
	});

    const user = await res.json();
	return user;
}
