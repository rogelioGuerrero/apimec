
const BaseModel = require("./basemodel");
class Clientes extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				name: {name: 'name', type:Sequelize.STRING},
				phone: {name: 'phone', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "clientes",
				modelName: "clientes",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'phone'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'phone'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'phone'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'phone'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'name', 
			'phone'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("name LIKE :search"), 
			sequelize.literal("phone LIKE :search"),
		];
	}

	
	
}
module.exports = Clientes;
