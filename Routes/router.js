const express=require('express')

const userController=require('../Controllers/userController')

const multerConfig=require('../middlewares/multer-middleware')

const router=new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get-all-users',userController.getallusers)

router.delete('/delete-user/:id',userController.deleteUser)

router.put('/edseit-ur/:id',multerConfig.single("profile"),userController.editUser)


module.exports=router