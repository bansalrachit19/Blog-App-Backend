//models import karooo
const Post = require("../models/postModel");

exports.createPost = async (req, res) => {
    try {
        //fetching the data from request ki body
        const { title, body } = req.body;

        //creating an object for th new post
        const post = new Post({
            title, body
        });

        //save the new comment on the datbase
        const savedPost = await post.save();

        res.json({
            post: savedPost,
        });
    }
    catch (error) {
        return res.status(400).json({
            error: "post ko post karne mein koi dikkat hai",
        });
    }
};

//need some more testing after completing like vala function
exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find().populate("comments").exec();
        res.json({
            allPosts,
        })
    }
    catch (error) {
        return res.status(500).json({
            error: "sahi se kar yr",
        });
    }
};