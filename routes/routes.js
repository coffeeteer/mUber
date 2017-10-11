const DriversController = require('../controllers/drivers_controllers');

module.exports = (app) => {
	//request handler
	// Watch for incoming requests of method GET
	// to the route http://localhost:3010/api
	// app.get('/api', DriversController.greeting);

	app.post('/api/drivers', DriversController.create); //post() requests are associated with creating data

	app.put('/api/drivers/:id', DriversController.edit); // put() requests are associated with editing data
	//:id represents any id of the driver in the database

	app.delete('/api/drivers/:id', DriversController.delete);

	app.get('/api/drivers', DriversController.index); // get requests are displaying of data
};