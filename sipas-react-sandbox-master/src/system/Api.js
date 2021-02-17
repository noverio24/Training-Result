import axios from 'axios';
import MD5 from 'crypto-js/md5';

const BaseUrl = process.env.REACT_APP_SERVER_URL;

const validateUser = ({ username, password }) => {
	console.log(BaseUrl);
	return axios({
		baseURL: BaseUrl,
		method: 'post',
		url: 'server.php/sipas/account/login/token',
		params: {
			username,
			password: MD5(password).toString()
		}
	});
};

export {
    validateUser
};
