const mongoose = require("mongoose");

const matakuliahSchema = new mongoose.Schema({
    kode: {
        type: String, 
        required: [true, "kode matakuliah harus diisi"]},
    nama: {
        type: String, 
        required: [true, "nama matakuliah harus diisi"]},
    ruangan: {
        type: String,
        required: [false],
    },
    jam: {
        type: {
            hari: {
                type: String,
                enum: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"]
            },
            jamMulai: {
                type: String,
                required: [true, "jam mulai harus diisi"]
            },
            jamSelesai: {
                type: String,
                required: [true, "jam selesai harus diisi"]
            }
        },
        required: [false]
    },
});

const Matakuliah = mongoose.model("Matakuliah", matakuliahSchema);

module.exports = Matakuliah;