/** Express router providing Datosprueba related routes
 *
 * @module routers/Datosprueba
 * @module config - app config
 * @module utils - app utils functions
 * @module express-validator - form validation module
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const utils = require('../helpers/utils');
const { body, validationResult } = require('express-validator');
const models = require('../models/index.js');
const Datosprueba = models.Datosprueba;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list datosprueba records
 * @route {GET} /datosprueba/index/{fieldname}/{fieldvalue}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldname = req.params.fieldname;
		let fieldvalue = req.params.fieldvalue;
		
		if (fieldname){
			where[Op.and] = [
				sequelize.literal(`(${fieldname} = :fieldvalue)`)
			];
			replacements.fieldvalue = fieldvalue;
		}
		let search = req.query.search;
		if(search){
			let searchFields = Datosprueba.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Datosprueba.getOrderBy(req, 'desc');
		query.attributes = Datosprueba.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Datosprueba.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Datosprueba record
 * @route {GET} /datosprueba/view/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		let recid = req.params.recid || null;
		let query = {}
		let where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Datosprueba.viewFields();
		let record = await Datosprueba.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Datosprueba record
 * @route {POST} /datosprueba/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('ciudad').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('fabricante').optional({nullable: true, checkFalsy: true}),
		body('fecha_envio').optional({nullable: true, checkFalsy: true}),
		body('fecha_pedido').optional({nullable: true, checkFalsy: true}),
		body('forma_envio').optional({nullable: true, checkFalsy: true}),
		body('id_pedido').optional({nullable: true, checkFalsy: true}),
		body('cliente').optional({nullable: true, checkFalsy: true}),
		body('producto').optional({nullable: true, checkFalsy: true}),
		body('paisregion').optional({nullable: true, checkFalsy: true}),
		body('region').optional({nullable: true, checkFalsy: true}),
		body('segmento').optional({nullable: true, checkFalsy: true}),
		body('subcategoria').optional({nullable: true, checkFalsy: true}),
		body('cantidad').optional({nullable: true, checkFalsy: true}),
		body('descuento').optional({nullable: true, checkFalsy: true}),
		body('ganancia').optional({nullable: true, checkFalsy: true}),
		body('numero_registros').optional({nullable: true, checkFalsy: true}),
		body('relacion_ganancias').optional({nullable: true, checkFalsy: true}),
		body('total').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Datosprueba record
		let record = await Datosprueba.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Datosprueba record for edit
 * @route {GET} /datosprueba/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		let recid = req.params.recid;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Datosprueba.editFields();
		let record = await Datosprueba.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Datosprueba record
 * @route {POST} /datosprueba/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('categoria').optional({nullable: true, checkFalsy: true}),
		body('ciudad').optional({nullable: true, checkFalsy: true}),
		body('estado').optional({nullable: true, checkFalsy: true}),
		body('fabricante').optional({nullable: true, checkFalsy: true}),
		body('fecha_envio').optional({nullable: true, checkFalsy: true}),
		body('fecha_pedido').optional({nullable: true, checkFalsy: true}),
		body('forma_envio').optional({nullable: true, checkFalsy: true}),
		body('id_pedido').optional({nullable: true, checkFalsy: true}),
		body('cliente').optional({nullable: true, checkFalsy: true}),
		body('producto').optional({nullable: true, checkFalsy: true}),
		body('paisregion').optional({nullable: true, checkFalsy: true}),
		body('region').optional({nullable: true, checkFalsy: true}),
		body('segmento').optional({nullable: true, checkFalsy: true}),
		body('subcategoria').optional({nullable: true, checkFalsy: true}),
		body('cantidad').optional({nullable: true, checkFalsy: true}),
		body('descuento').optional({nullable: true, checkFalsy: true}),
		body('ganancia').optional({nullable: true, checkFalsy: true}),
		body('numero_registros').optional({nullable: true, checkFalsy: true}),
		body('relacion_ganancias').optional({nullable: true, checkFalsy: true}),
		body('total').optional({nullable: true, checkFalsy: true}),
	]
, async (req, res) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let recid = req.params.recid;
		let modeldata = req.body;
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Datosprueba.editFields();
		let record = await Datosprueba.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Datosprueba.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Datosprueba record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /datosprueba/delete/{recid}
 * @param {array} path - Array of express paths
 * @param {callback} middleware - Express middleware.
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		let recid = req.params.recid || '';
		recid = recid.split(',');
		let query = {};
		let where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Datosprueba.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Datosprueba.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
