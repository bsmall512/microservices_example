const server = require('express')();
const bodyParser = require('body-parser');

const config = require('./config');
const { port } = config;

server.use(bodyParser.json())
require('./routes/get')(server);
require('./dbutil')(config);
server.listen(port, () => console.log(`I am listening on port ${port}`));