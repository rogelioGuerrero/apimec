
const BaseModel = require("./basemodel");
class Historico extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				code: {name: 'code', type:Sequelize.INTEGER},
				phone: {name: 'phone', type:Sequelize.STRING},
				pedido: {name: 'pedido', type:Sequelize.INTEGER},
				produto: {name: 'produto', type:Sequelize.INTEGER},
				conteudo: {name: 'conteudo', type:Sequelize.STRING},
				data: {name: 'data', type:Sequelize.DATE}
			}, 
			{ 
				sequelize,
				
				tableName: "historico",
				modelName: "historico",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'phone', 
			'pedido', 
			'produto', 
			'conteudo', 
			'data'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'phone', 
			'pedido', 
			'produto', 
			'conteudo', 
			'data'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'phone', 
			'pedido', 
			'produto', 
			'conteudo', 
			'data'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'phone', 
			'pedido', 
			'produto', 
			'conteudo', 
			'data'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'code', 
			'phone', 
			'pedido', 
			'produto', 
			'conteudo'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("phone LIKE :search"), 
			sequelize.literal("conteudo LIKE :search"),
		];
	}

	
	
}
module.exports = Historico;
