require('dotenv').config();

const jwt = require('jsonwebtoken');
const jwks = require('jwks-rsa');
const { promisify } = require('util');

const jwksClient = jwks({
	jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

let signingKey;

const validateAccessToken = async (token) => {
	if (!signingKey) {
		try {
			const getSigningKey = promisify(jwksClient.getSigningKey);
			const key = await getSigningKey(process.env.AUTH0_KEY_ID);
			signingKey = key.getPublicKey();
		} catch (error) {
			console.error(error);
			return null;
		}
	}

	try {
		const decoded = jwt.verify(token, signingKey);
		console.log(decoded);
		return decoded;
	} catch (error) {
		console.error(error);
		return null;
	}
};

const getAccessTokenFromHeaders = (headers) => {
	const rawAuthorization = headers.authorization;
	if (!rawAuthorization) {
		return null;
	}
	const authorizationParts = rawAuthorization.split(' ');
	if (authorizationParts[0] !== 'Bearer' || authorizationParts.length !== 2) {
		return null;
	}

	const accessToken = authorizationParts[1];
	return accessToken;
};

module.exports = {
	getAccessTokenFromHeaders,
	validateAccessToken,
};
