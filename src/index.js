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

    // const k = await repo.getAll(0,4);
    // console.log(k[2].contentWithEmail);

    // const k = await repo.getAll(4, 4);
    // console.log(k);

    await repo.create({content: 'this is 10th tweet', userEmail: 'thalaForAReason@gmail.com'});
    
    // const tweetId = await repo.get('65ab7ed7a438a88cc036c4f8');
    // console.log(tweetId);
    // const comment = await Comment.create({content: 'this is comment on 10th tweet'});
    // tweetId.comments.push(comment);
    // await tweetId.save();
    // console.log(tweetId);

    // const t = await repo.getUserWithComment('65ab7ed7a438a88cc036c4f8');
    // console.log();


    // k.comments.push(comment);
    // await k.save();
    // console.log(k);


   
}) 