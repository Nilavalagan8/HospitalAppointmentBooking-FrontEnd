const express = require('express');
const router = express.Router();
const hoscontrol = require("../controller/hospitalcontrol");

router.get('/',hoscontrol.viewHome);
router.get('/services',hoscontrol.viewServices);
router.get('/about',hoscontrol.viewAbout);
router.get('/home',hoscontrol.viewHome);
router.get('/docters',hoscontrol.viewDocter);
router.get('/bookslot',hoscontrol.viewBook);
router.get('/review',hoscontrol.viewHome);
router.get('/login',hoscontrol.login);
router.get('/signin',hoscontrol.sign);
module.exports = router;