
const Sequelize = require('sequelize');
const dbConfig    = require('../config.js').database;

const sequelize = new Sequelize(dbConfig.name, dbConfig.username, dbConfig.password, {
		dialect: dbConfig.type,
		host: dbConfig.host,
		
		pool: {
			max: 15,
			min: 5,
			idle: 20000,
			evict: 15000,
			acquire: 30000
		},
		define: {
			timestamps: false,
			freezeTableName: true
		},
		operatorsAliases: 0
	}
);


// Override timezone formatting
Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
	return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss');
};

const Clientes =  require("./clientes").init(sequelize, Sequelize);
const Datosprueba =  require("./datosprueba").init(sequelize, Sequelize);
const Historico =  require("./historico").init(sequelize, Sequelize);
const Pedido =  require("./pedido").init(sequelize, Sequelize);
const Produtos =  require("./produtos").init(sequelize, Sequelize);
const Registro =  require("./registro").init(sequelize, Sequelize);

const Op = Sequelize.Op;

const filterByRaw = function(expression, value){
	return sequelize.where(sequelize.literal(expression), value);
}

module.exports = {
	sequelize,
	Op,
	filterByRaw,
	Clientes,
	Datosprueba,
	Historico,
	Pedido,
	Produtos,
	Registro
}
