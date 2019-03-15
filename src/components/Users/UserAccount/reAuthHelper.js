export default (code, message) => {

	let needReLogin = null;
	let error = null;

	if (code === 'auth/requires-recent-login') {
		needReLogin = true;
		error = {
			value: true, 
			code: code, 
			message: message
		}

	} else if ( code !== 'auth/requires-recent-login' ) {
		needReLogin = false;
		error = {
			value: true, 
			code: code, 
			message: message
		}
	}

	return {
		error: {
			value: true, 
			code: error.code, 
			message: error.message
		},
		setNeedReLogin: needReLogin
	}
}