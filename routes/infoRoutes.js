const path = require('path');
const express = require('express');
const userinformations = require('../controller/crudmysql');
const router = express.Router();
router.get('/add-info', userinformations.createInfo);
module.exports = router;