
const BaseModel = require("./basemodel");
class Datosprueba extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				categoria: {name: 'Categoria', type:Sequelize.STRING},
				ciudad: {name: 'Ciudad', type:Sequelize.STRING},
				estado: {name: 'Estado', type:Sequelize.STRING},
				fabricante: {name: 'Fabricante', type:Sequelize.STRING},
				fecha_envio: {name: 'Fecha_envio', type:Sequelize.STRING},
				fecha_pedido: {name: 'Fecha_pedido', type:Sequelize.STRING},
				forma_envio: {name: 'Forma_envio', type:Sequelize.STRING},
				id_pedido: {name: 'Id_pedido', type:Sequelize.STRING},
				cliente: {name: 'cliente', type:Sequelize.STRING},
				producto: {name: 'producto', type:Sequelize.STRING},
				paisregion: {name: 'PaisRegion', type:Sequelize.STRING},
				region: {name: 'Region', type:Sequelize.STRING},
				segmento: {name: 'Segmento', type:Sequelize.STRING},
				subcategoria: {name: 'Subcategoria', type:Sequelize.STRING},
				cantidad: {name: 'Cantidad', type:Sequelize.STRING},
				descuento: {name: 'Descuento', type:Sequelize.STRING},
				ganancia: {name: 'Ganancia', type:Sequelize.STRING},
				numero_registros: {name: 'Numero_registros', type:Sequelize.STRING},
				relacion_ganancias: {name: 'Relacion_ganancias', type:Sequelize.STRING},
				total: {name: 'Total', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "datosprueba",
				modelName: "datosprueba",
			}
		);
	}
	
	static listFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Categoria AS categoria'), 
			sequelize.literal('Ciudad AS ciudad'), 
			sequelize.literal('Estado AS estado'), 
			sequelize.literal('Fabricante AS fabricante'), 
			sequelize.literal('Fecha_envio AS fecha_envio'), 
			sequelize.literal('Fecha_pedido AS fecha_pedido'), 
			sequelize.literal('Forma_envio AS forma_envio'), 
			sequelize.literal('Id_pedido AS id_pedido'), 
			'cliente', 
			'producto', 
			sequelize.literal('PaisRegion AS paisregion'), 
			sequelize.literal('Region AS region'), 
			sequelize.literal('Segmento AS segmento'), 
			sequelize.literal('Subcategoria AS subcategoria'), 
			sequelize.literal('Cantidad AS cantidad'), 
			sequelize.literal('Descuento AS descuento'), 
			sequelize.literal('Ganancia AS ganancia'), 
			sequelize.literal('Numero_registros AS numero_registros'), 
			sequelize.literal('Relacion_ganancias AS relacion_ganancias'), 
			sequelize.literal('Total AS total')
		];
	}

	static exportListFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Categoria AS categoria'), 
			sequelize.literal('Ciudad AS ciudad'), 
			sequelize.literal('Estado AS estado'), 
			sequelize.literal('Fabricante AS fabricante'), 
			sequelize.literal('Fecha_envio AS fecha_envio'), 
			sequelize.literal('Fecha_pedido AS fecha_pedido'), 
			sequelize.literal('Forma_envio AS forma_envio'), 
			sequelize.literal('Id_pedido AS id_pedido'), 
			'cliente', 
			'producto', 
			sequelize.literal('PaisRegion AS paisregion'), 
			sequelize.literal('Region AS region'), 
			sequelize.literal('Segmento AS segmento'), 
			sequelize.literal('Subcategoria AS subcategoria'), 
			sequelize.literal('Cantidad AS cantidad'), 
			sequelize.literal('Descuento AS descuento'), 
			sequelize.literal('Ganancia AS ganancia'), 
			sequelize.literal('Numero_registros AS numero_registros'), 
			sequelize.literal('Relacion_ganancias AS relacion_ganancias'), 
			sequelize.literal('Total AS total')
		];
	}

	static viewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Categoria AS categoria'), 
			sequelize.literal('Ciudad AS ciudad'), 
			sequelize.literal('Estado AS estado'), 
			sequelize.literal('Fabricante AS fabricante'), 
			sequelize.literal('Fecha_envio AS fecha_envio'), 
			sequelize.literal('Fecha_pedido AS fecha_pedido'), 
			sequelize.literal('Forma_envio AS forma_envio'), 
			sequelize.literal('Id_pedido AS id_pedido'), 
			'cliente', 
			'producto', 
			sequelize.literal('PaisRegion AS paisregion'), 
			sequelize.literal('Region AS region'), 
			sequelize.literal('Segmento AS segmento'), 
			sequelize.literal('Subcategoria AS subcategoria'), 
			sequelize.literal('Cantidad AS cantidad'), 
			sequelize.literal('Descuento AS descuento'), 
			sequelize.literal('Ganancia AS ganancia'), 
			sequelize.literal('Numero_registros AS numero_registros'), 
			sequelize.literal('Relacion_ganancias AS relacion_ganancias'), 
			sequelize.literal('Total AS total')
		];
	}

	static exportViewFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Categoria AS categoria'), 
			sequelize.literal('Ciudad AS ciudad'), 
			sequelize.literal('Estado AS estado'), 
			sequelize.literal('Fabricante AS fabricante'), 
			sequelize.literal('Fecha_envio AS fecha_envio'), 
			sequelize.literal('Fecha_pedido AS fecha_pedido'), 
			sequelize.literal('Forma_envio AS forma_envio'), 
			sequelize.literal('Id_pedido AS id_pedido'), 
			'cliente', 
			'producto', 
			sequelize.literal('PaisRegion AS paisregion'), 
			sequelize.literal('Region AS region'), 
			sequelize.literal('Segmento AS segmento'), 
			sequelize.literal('Subcategoria AS subcategoria'), 
			sequelize.literal('Cantidad AS cantidad'), 
			sequelize.literal('Descuento AS descuento'), 
			sequelize.literal('Ganancia AS ganancia'), 
			sequelize.literal('Numero_registros AS numero_registros'), 
			sequelize.literal('Relacion_ganancias AS relacion_ganancias'), 
			sequelize.literal('Total AS total')
		];
	}

	static editFields() {
		let sequelize = this.sequelize;
		return [
			'id', 
			sequelize.literal('Categoria AS categoria'), 
			sequelize.literal('Ciudad AS ciudad'), 
			sequelize.literal('Estado AS estado'), 
			sequelize.literal('Fabricante AS fabricante'), 
			sequelize.literal('Fecha_envio AS fecha_envio'), 
			sequelize.literal('Fecha_pedido AS fecha_pedido'), 
			sequelize.literal('Forma_envio AS forma_envio'), 
			sequelize.literal('Id_pedido AS id_pedido'), 
			'cliente', 
			'producto', 
			sequelize.literal('PaisRegion AS paisregion'), 
			sequelize.literal('Region AS region'), 
			sequelize.literal('Segmento AS segmento'), 
			sequelize.literal('Subcategoria AS subcategoria'), 
			sequelize.literal('Cantidad AS cantidad'), 
			sequelize.literal('Descuento AS descuento'), 
			sequelize.literal('Ganancia AS ganancia'), 
			sequelize.literal('Numero_registros AS numero_registros'), 
			sequelize.literal('Relacion_ganancias AS relacion_ganancias'), 
			sequelize.literal('Total AS total')
		];
	}

	
	static searchFields(){
		let sequelize = this.sequelize;
		return [
			sequelize.literal("Categoria LIKE :search"), 
			sequelize.literal("Ciudad LIKE :search"), 
			sequelize.literal("Estado LIKE :search"), 
			sequelize.literal("Fabricante LIKE :search"), 
			sequelize.literal("Fecha_envio LIKE :search"), 
			sequelize.literal("Fecha_pedido LIKE :search"), 
			sequelize.literal("Forma_envio LIKE :search"), 
			sequelize.literal("Id_pedido LIKE :search"), 
			sequelize.literal("cliente LIKE :search"), 
			sequelize.literal("producto LIKE :search"), 
			sequelize.literal("PaisRegion LIKE :search"), 
			sequelize.literal("Region LIKE :search"), 
			sequelize.literal("Segmento LIKE :search"), 
			sequelize.literal("Subcategoria LIKE :search"), 
			sequelize.literal("Cantidad LIKE :search"), 
			sequelize.literal("Descuento LIKE :search"), 
			sequelize.literal("Ganancia LIKE :search"), 
			sequelize.literal("Numero_registros LIKE :search"), 
			sequelize.literal("Relacion_ganancias LIKE :search"), 
			sequelize.literal("Total LIKE :search"),
		];
	}

	
	
}
module.exports = Datosprueba;
