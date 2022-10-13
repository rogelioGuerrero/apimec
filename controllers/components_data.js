/** Express router providing related routes to page component data
 *
 * @module routers/components_data
 * @module config - app config
 * @module models- app model module
 * @requires express
 */
const express = require('express');
const router = express.Router();
const models = require('../models/index.js');


const sequelize = models.sequelize;
const Op = models.Op; // sequelize query operators
const filterByRaw = models.filterByRaw; // sequelize where condtion
const dbRaw = sequelize.literal; // sequelize raw query expression
module.exports = router;
