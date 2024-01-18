const Tweet = require('../models/tweet');

class TweetRepository{

    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const response = await Tweet.findById(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getUserWithComment(id) {
        try {
            const response = await Tweet.findById(id).populate({path: 'comments'});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async update(userId, userData) {
        try {
            const response = await Tweet.findByIdAndUpdate(userId, userData, {new: true});
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const response = await Tweet.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;