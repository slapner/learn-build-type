const { table, getHighScores } = require('./utils/airtable');

exports.handler = async (event) => {
	if (event.httpMethod !== 'POST') {
		return {
			statusCode: 405,
			body: JSON.stringify({ err: 'That method is not allowed' }),
		};
	}

	const { score, name } = JSON.parse(event.body);
	if (typeof score === 'undefined' || !name) {
		return {
			statusCode: 400,
			body: JSON.stringify({ err: 'Bad request' }),
		};
	}

	try {
		const records = await getHighScores(false);
		const lowestRecord = records[9];
		if (
			typeof lowestRecord.fields.score === 'undefined' ||
			score > lowestRecord.fields.score
		) {
			// update this record with the incoming score
			const updateRecord = {
				id: lowestRecord.id,
				fields: { name, score },
			};

			await table.update([updateRecord]);
			return {
				statusCode: 200,
				body: JSON.stringify(updateRecord),
			};
		} else {
			return {
				statusCode: 200,
				body: JSON.stringify({}),
			};
		}
	} catch (error) {
		console.error(error);
		return {
			statusCode: 500,
			body: JSON.stringify({
				err: 'Failed to save score in Airtable',
			}),
		};
	}
};
