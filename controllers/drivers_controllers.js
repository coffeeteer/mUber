const Driver = require('../models/Driver');

module.exports = {
	greeting(req, res){
		res.send({ hi: 'There!' });
	},

	index(req, res, next){
		const { lng, lat } = reg.query;

		Driver.geoNear(
			{type: 'Point', coordinates: [lng, lat] },
			{spherical: true, maxDistance: 200000}
		)
			.then(drivers => res.send(drivers))
			.catch(next);
	},

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

	delete(req, res, next) {
		const driverId = req.params.id;

		Driver.findByIdAndRemove({ _id: driverId })
			.then(driver => res.status(204).send(driver))
			.catch(next);
	}
};