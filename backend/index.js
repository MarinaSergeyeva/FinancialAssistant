const { CrudServer } = require('./src/server');
const { config } = require("./src/config");

new CrudServer(config).start();
