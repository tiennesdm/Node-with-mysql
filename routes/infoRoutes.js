const path = require('path');
const express = require('express');
const userinformations = require('../controller/crudmysql');
const router = express.Router();
router.post('/add-info', userinformations.createInfo);
router.get('/', userinformations.getinfo);
router.delete('/:id', userinformations.deleteInfo);
router.put('/:id', userinformations.updateInfo);
module.exports = router;