const router=require('express').Router()
const {user}=require('../controller/schoolController')

router.post('/create',user)

module.exports=router