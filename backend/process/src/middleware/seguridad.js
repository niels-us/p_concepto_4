const jwt = require('jsonwebtoken');

const seguridad = async (req, res, next) => {

	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		return next('El usuario no envio el token');
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
		req.usuario = decoded

		next();
	}
	catch (err) {

		return next('El token ingresado es inválido ' + err);
	}

}

module.exports = seguridad 