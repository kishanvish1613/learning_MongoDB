const express = require('express');
const connect = require('./config/database')

const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment')

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`server started at ${PORT}`);
    await connect();
    console.log("mongo db connected");

    const repo = new TweetRepository();

    const k = await repo.getUserWithComment('65a8ef191d5c2a8dabd14ab0');
    console.log(k);

    // const comment = await Comment.create({content: 'comment using seprate comment models on 6th tweet'});
    // console.log(comment);

    // k.comments.push(comment);
    // await k.save();
    // console.log(k);


   
}) 