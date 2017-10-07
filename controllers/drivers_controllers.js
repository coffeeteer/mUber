module.exports = {
	greeting(req, res) {
		res.send({ hi: 'There!' });
	},

	create(req, res){
		console.log(req.body);
		res.send({ hi: 'There!'})
	}
};