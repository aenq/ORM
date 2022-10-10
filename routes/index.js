const router = require('express').Router();
const PhotoController = require('../controllers/photoController');
const UserController = require('../controllers/userController');

router.post('/users/register', UserController.register);

router.get('/photos', PhotoController.GetAllPhotos);

router.get('/photos/:id', PhotoController.getOnePhotoByID);

router.post('/photos', PhotoController.createPhoto);

router.put('/photos/:id', PhotoController.updateOnePhotoByID);

router.delete('/photos/:id', PhotoController.deleteOnePhotoByID);

module.exports = router;