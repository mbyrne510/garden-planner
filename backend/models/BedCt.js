const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BedCtSchema = new Schema({
    bedCt: {
        type: String,
        required: true
    }
});

module.exports = BedCt = mongoose.model('bedCt', BedCtSchema);