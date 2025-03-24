const express = require ('express');

const route = express.Router();
const {read,update,Delete, kalsu} = require('./usercontrollers');


route.get('/kalsu',kalsu)
route.post('/read',read)
route.put('/update/:id',update)
route.delete('/Delete/:id',Delete)


module.exports = route