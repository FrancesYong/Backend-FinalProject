const Matakuliah = require("./models");
const express = require("express");

const app = express();
app.use(express.json());

const index = async (req, res, next) => {
    try{
        const matakuliah = await Matakuliah.find();
        res.send({ status: "success", message: "daftar matakuliah berhasil ditemukan", data: matakuliah});
    }catch(error){
        res.send({status: "error", message: error.message});
    }
};

const getMKByCode = async (req, res, next) => {
    try{
        const matakuliah = await Matakuliah.find( {kode: req.params.kode} );
        if(matakuliah){
            res.send({ status: "success", message: "matakuliah berhasil ditemukan", data: matakuliah});
        }else{
            res.send({ status: "warning", message: "matakuliah tidak ditemukan"});
        }
        }catch(error){
        res.send({status: "error", message: error.message});
    }
}

const getMKByName = async (req, res, next) => {
    try{
        const matakuliah = await Matakuliah.findOne( {nama: req.query.nama} );
        if(matakuliah.length > 0){
            res.send({ status: "success", message: "matakuliah berhasil ditemukan", data: matakuliah});
        }else{
            res.send({ status: "warning", message: "matakuliah tidak ditemukan"});
        }
        }catch(error){
        res.send({status: "error", message: error.message});
    }
}

const postMK = async (req, res, next) => {
    try{
        const matakuliah = await Matakuliah.create(req.body);
        if(matakuliah){
            res.send({ status: "success", message: "matakuliah berhasil ditambahkan", data: matakuliah});
        }else{
            res.send({ status: "warning", message: "gagal menambahkan matakuliah"});
        }
        }catch(error){
        res.send({status: "error", message: error.message});
    }
}

const putMK = async (req, res, next) => {
    try{
        const result = await Matakuliah.updateOne({ kode: req.params.kode }, { $set: req.body });
        if(result.modifiedCount > 0){
            res.send({ status: "success", message: "matakuliah berhasil diperbaharui", data: result});
        }else{
            res.send({ status: "warning", message: "gagal memperbaharui matakuliah"});
        }
        }catch(error){
        res.send({status: "error", message: error.message});
    }
}

const deleteMK = async (req, res, next) => {
    try{
        const result = await Matakuliah.deleteOne({ kode: req.params.kode });
        if(result.deletedCount > 0){
            res.send({ status: "success", message: "matakuliah dihapus"});
        }else{
            res.send({ status: "warning", message: "gagal menghapus matakuliah"});
        }
        }catch(error){
        res.send({status: "error", message: error.message});
    }
}

module.exports = {
    index,
    getMKByCode,
    getMKByName,
    postMK,
    putMK,
    deleteMK,

}