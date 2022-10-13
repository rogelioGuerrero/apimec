
const BaseModel = require("./basemodel");
class Pedido extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				cliente: {name: 'cliente', type:Sequelize.STRING},
				produto: {name: 'produto', type:Sequelize.INTEGER},
				data: {name: 'data', type:Sequelize.DATE}
			}, 
			{ 
				sequelize,
				
				tableName: "pedido",
				modelName: "pedido",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'cliente', 
			'produto', 
			'data'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'cliente', 
			'produto', 
			'data'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'cliente', 
			'produto', 
			'data'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'cliente', 
			'produto', 
			'data'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'cliente', 
			'produto', 
			'data'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("cliente LIKE :search"),
		];
	}

	
	
}
module.exports = Pedido;
