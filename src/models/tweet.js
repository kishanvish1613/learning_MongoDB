const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    userEmail: {
        type: String
    },
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: 'Comment'
        }
    ]
}, {timestamps: true});

tweetSchema.virtual('contentWithEmail').get(
    function () {
        return `${this.content} \n Created by: ${this.userEmail}`;
    }
)

tweetSchema.pre('save', function(next) {
    console.log("inside hooks");
    next();
})

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;