const  express =require('express');
const {Getgigs,getgigbyuser,addgig} = require('../controlers/gigcontroler');
const router=express. Router();

router.get('/', Getgigs);
router.get('/:id', getgigbyuser);
router.post('/insert', addgig);

module.exports = router;