
const BaseModel = require("./basemodel");
class Produtos extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nome: {name: 'nome', type:Sequelize.STRING},
				valor: {name: 'valor', type:Sequelize.DOUBLE}
			}, 
			{ 
				sequelize,
				
				tableName: "produtos",
				modelName: "produtos",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nome', 
			'valor'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nome', 
			'valor'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nome', 
			'valor'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nome', 
			'valor'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'nome', 
			'valor'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("nome LIKE :search"),
		];
	}

	
	
}
module.exports = Produtos;
