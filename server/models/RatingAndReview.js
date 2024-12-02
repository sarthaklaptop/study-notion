const mongoose = require("mongoose");

const ratingAndReviewsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true, 
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
        index: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        trim: true,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("RatingAndReview", ratingAndReviewsSchema);