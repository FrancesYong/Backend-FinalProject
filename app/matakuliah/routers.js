var express = require('express');
var router = express.Router();
const {index, getMKByCode, getMKByName, postMK, deleteMK, putMK} = require("./controllers");

router.get('/matakuliah', index);
router.get('/matakuliah/:kode', getMKByCode);
router.get('/matakuliah?nama=', getMKByName);
router.post('/matakuliah', postMK);
router.put('/matakuliah/:kode', putMK);
router.delete('/matakuliah/:kode', deleteMK);

module.exports = router;