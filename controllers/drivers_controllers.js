const Driver = require('../models/Driver');

module.exports = {

	create(req, res, done) {
		const driverProps = req.body;

		Driver.create(driverProps)
			.then(driver => res.send(driver))
			.catch(done);
	},

	edit(req, res, next){
		const driverId = req.params.id;
		const driverProps = req.body;

		Driver.findByIdAndUpdate({  _id: driverId }, driverProps)
			.then(() => Driver.findById({ _id: driverId }))
			.then( driver => res.send(driver))
			.catch(next);
	},

	remove(req, res, next) {
		const driverId = req.params.id;
		const driverProps = req.body;


		Driver.findByIdAndRemove({ _id: driverId}, driverProps)
			.then(() => Driver.findById({ _id: driverId }))
			.then( driver => res.send(driver))
			.catch(next);
	}
};