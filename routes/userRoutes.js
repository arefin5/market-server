const  express =require('express');
const  { authuser,getUserprofile, rigesterUser } =require('../controlers/userControler.js');
const router=express. Router();

router.post('/login',authuser)
router.get('/profile',getUserprofile)
router.post('/rigesterUser',rigesterUser)


module.exports = router;