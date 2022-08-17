const  express =require('express');
const {buyerReletedJob}=require('../controlers/jobcontroler');
const router=express. Router();
    
router.get('/id',buyerReletedJob)
module.exports = router;