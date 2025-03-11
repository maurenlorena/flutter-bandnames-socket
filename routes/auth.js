/*
path: api/login

*/



const { Router } = require('express');
const { check } = require('express-validator');

const { crearUsuario, loginUsuario, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

router.post('/new',[
   check('nombre','El nombre es obligatorio').not().isEmpty(),
   check('email','El email es obligatorio').isEmail(),
   check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
   validarCampos
], crearUsuario);


router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password', 'El password debe tener al menos 6 caracteres').isLength({ min: 6 }),
    validarCampos
 ], loginUsuario);

router.get('/renew', validarJWT, renewToken);


module.exports = router;