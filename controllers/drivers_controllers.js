const Driver = require('../models/Driver');

module.exports = {

	create(req, res, done) {
		const driverProps = req.body;

		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(done);
	}
};