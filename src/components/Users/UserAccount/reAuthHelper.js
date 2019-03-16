export default (code, message) => {

	let needReAuth = null;
	let error = null;

	if (code === 'auth/requires-recent-login') {
		needReAuth = true;
		error = {
			isFail: true, 
			code: code, 
			message: message
		}

	} else if ( code !== 'auth/requires-recent-login' ) {
		needReAuth = false;
		error = {
			isFail: true, 
			code: code, 
			message: message
		}
	} 

	return {
		error: {
			isFail: error.isFail, 
			code: error.code, 
			message: error.message
		},
		setNeedReAuth: needReAuth
	}
}