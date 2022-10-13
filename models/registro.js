
const BaseModel = require("./basemodel");
class Registro extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				id_cabecera: {name: 'id_cabecera', type:Sequelize.INTEGER},
				dimension: {name: 'dimension', type:Sequelize.STRING},
				subdimension: {name: 'subdimension', type:Sequelize.STRING},
				componente: {name: 'componente', type:Sequelize.STRING},
				item: {name: 'item', type:Sequelize.STRING},
				medicion: {name: 'medicion', type:Sequelize.INTEGER},
				base: {name: 'base', type:Sequelize.INTEGER},
				status: {name: 'status', type:Sequelize.INTEGER},
				valor: {name: 'valor', type:Sequelize.DECIMAL},
				porcentaje: {name: 'porcentaje', type:Sequelize.DECIMAL},
				comen: {name: 'comen', type:Sequelize.STRING},
				link_evidencias: {name: 'link_evidencias', type:Sequelize.STRING},
				criterios: {name: 'criterios', type:Sequelize.INTEGER},
				orden_dim: {name: 'orden_dim', type:Sequelize.INTEGER},
				orden_subdim: {name: 'orden_subdim', type:Sequelize.INTEGER},
				subcriterios: {name: 'subcriterios', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "registro",
				modelName: "registro",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_cabecera', 
			'dimension', 
			'subdimension', 
			'componente', 
			'item', 
			'medicion', 
			'base', 
			'status', 
			'valor', 
			'porcentaje', 
			'comen', 
			'link_evidencias', 
			'criterios', 
			'orden_dim', 
			'orden_subdim', 
			'subcriterios'
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_cabecera', 
			'dimension', 
			'subdimension', 
			'componente', 
			'item', 
			'medicion', 
			'base', 
			'status', 
			'valor', 
			'porcentaje', 
			'comen', 
			'link_evidencias', 
			'criterios', 
			'orden_dim', 
			'orden_subdim', 
			'subcriterios'
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_cabecera', 
			'dimension', 
			'subdimension', 
			'componente', 
			'item', 
			'medicion', 
			'base', 
			'status', 
			'valor', 
			'porcentaje', 
			'comen', 
			'link_evidencias', 
			'criterios', 
			'orden_dim', 
			'orden_subdim', 
			'subcriterios'
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_cabecera', 
			'dimension', 
			'subdimension', 
			'componente', 
			'item', 
			'medicion', 
			'base', 
			'status', 
			'valor', 
			'porcentaje', 
			'comen', 
			'link_evidencias', 
			'criterios', 
			'orden_dim', 
			'orden_subdim', 
			'subcriterios'
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			'id_cabecera', 
			'dimension', 
			'subdimension', 
			'componente', 
			'item', 
			'medicion', 
			'base', 
			'status', 
			'valor', 
			'porcentaje', 
			'comen', 
			'link_evidencias', 
			'criterios', 
			'orden_dim', 
			'orden_subdim', 
			'subcriterios'
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("dimension LIKE :search"), 
			sequelize.literal("subdimension LIKE :search"), 
			sequelize.literal("componente LIKE :search"), 
			sequelize.literal("item LIKE :search"), 
			sequelize.literal("comen LIKE :search"), 
			sequelize.literal("link_evidencias LIKE :search"), 
			sequelize.literal("subcriterios LIKE :search"),
		];
	}

	
	
}
module.exports = Registro;
