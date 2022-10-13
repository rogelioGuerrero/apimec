/** Express router providing Registro related routes
 *
 * @module routers/Registro
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
const Registro = models.Registro;


const sequelize = models.sequelize; // sequelize functions and operations
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression




/**
 * Route to list registro records
 * @route {GET} /registro/index/{fieldname}/{fieldvalue}
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
			let searchFields = Registro.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Registro.getOrderBy(req, 'desc');
		query.attributes = Registro.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 20;
		let result = await Registro.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Registro record
 * @route {GET} /registro/view/{recid}
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
		query.attributes = Registro.viewFields();
		let record = await Registro.findOne(query);
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
 * Route to insert Registro record
 * @route {POST} /registro/add
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/add/' , 
	[
		body('id_cabecera').not().isEmpty().isNumeric(),
		body('dimension').optional({nullable: true, checkFalsy: true}),
		body('subdimension').optional({nullable: true, checkFalsy: true}),
		body('componente').optional({nullable: true, checkFalsy: true}),
		body('item').optional({nullable: true, checkFalsy: true}),
		body('medicion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('base').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('status').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('valor').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('porcentaje').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('comen').optional({nullable: true, checkFalsy: true}),
		body('link_evidencias').optional({nullable: true, checkFalsy: true}),
		body('criterios').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('orden_dim').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('orden_subdim').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subcriterios').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = req.body;
		
		//save Registro record
		let record = await Registro.create(modeldata);
		//await record.reload(); //reload the record from database
		let recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Registro record for edit
 * @route {GET} /registro/edit/{recid}
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
		query.attributes = Registro.editFields();
		let record = await Registro.findOne(query);
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
 * Route to update  Registro record
 * @route {POST} /registro/edit/{recid}
 * @param {string} path - Express path
 * @param {callback} middleware - Express middleware.
 */
router.post('/edit/:recid' , 
	[
		body('id_cabecera').optional({nullable: true}).not().isEmpty().isNumeric(),
		body('dimension').optional({nullable: true, checkFalsy: true}),
		body('subdimension').optional({nullable: true, checkFalsy: true}),
		body('componente').optional({nullable: true, checkFalsy: true}),
		body('item').optional({nullable: true, checkFalsy: true}),
		body('medicion').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('base').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('status').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('valor').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('porcentaje').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('comen').optional({nullable: true, checkFalsy: true}),
		body('link_evidencias').optional({nullable: true, checkFalsy: true}),
		body('criterios').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('orden_dim').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('orden_subdim').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('subcriterios').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Registro.editFields();
		let record = await Registro.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Registro.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Registro record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /registro/delete/{recid}
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
		let records = await Registro.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Registro.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
