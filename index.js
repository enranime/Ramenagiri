const app = require('./api/index');
const config = require('./config');

const boot = async () => {
	app.listen(config.port, ()=>{
		console.log("Project is running!");
	});
}

boot();