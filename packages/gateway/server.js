const server = require('express')();
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const schema = require('./data/schema');
const { port } = require('./config');

server 
	.use(bodyParser.json())
	.use('/graphql', graphqlExpress({schema}))
	.use('/gq', graphiqlExpress({endpointURL: '/graphql'}))
	.listen(port, () => console.log(`I am listening on port ${port}`));