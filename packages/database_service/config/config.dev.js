const { PORT } = process.env

module.exports = {
	port: PORT || 4000, 
	mongoURI: 'mongodb://db_user:db_user1@ds163822.mlab.com:63822/microservice_database'
};

