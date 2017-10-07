const DriversController = require('../controllers/drivers_controllers');

module.exports = (app) => {
	//request handler
	// Watch for incoming requests of method GET
	// to the route http://localhost:3010/api
	app.get('/api', DriversController.greeting);

	app.post('/api/drivers', DriversController.create);
};