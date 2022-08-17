const  express =require('express');
const {Addjob,getjobbyuser} = require('../controlers/jobcontroler.js');
const router=express. Router();

router.get('/:id',getjobbyuser );
router.post('/insert', Addjob);

module.exports = router;