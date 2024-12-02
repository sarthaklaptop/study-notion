const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    course: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    }]
}, {timestamps: true});

module.exports = mongoose.model("Category", categorySchema);