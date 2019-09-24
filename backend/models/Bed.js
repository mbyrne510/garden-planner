const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BedSchema = new Schema({
    plants: {
        r0c0: {
            type: String,
            required: true
        },
        r0c1: {
            type: String,
            required: true
        },
        r0c2: {
            type: String,
            required: true
        },
        r0c3: {
            type: String,
            required: true
        },
        r1c0: {
            type: String,
            required: true
        },
        r1c1: {
            type: String,
            required: true
        },
        r1c2: {
            type: String,
            required: true
        },
        r1c3: {
            type: String,
            required: true
        },
        r2c0: {
            type: String,
            required: true
        },
        r2c1: {
            type: String,
            required: true
        },
        r2c2: {
            type: String,
            required: true
        },
        r2c3: {
            type: String,
            required: true
        },
        r3c0: {
            type: String,
            required: true
        },
        r3c1: {
            type: String,
            required: true
        },
        r3c2: {
            type: String,
            required: true
        },
        r3c3: {
            type: String,
            required: true
        }
    },
    numRows: {
        type: Number,
        required: true
    },
    numCols: {
        type: Number,
        required: true
    },
    maxRows: {
        type: Boolean,
        required: true
    },
    maxCols: {
        type: Boolean,
        required: true
    },
    minRows: {
        type: Boolean,
        required: true
    },
    minCols: {
        type: Boolean,
        required: true
    }
});

module.exports = Bed = mongoose.model('bed', BedSchema);