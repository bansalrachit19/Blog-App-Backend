//import models jo bhi use hone hain
const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

//business logic

exports.createComment = async (req, res) => {
    try {
        //fetch data from request ki body
        const { post, user, body } = req.body;
        //create a comment object
        const comment = new Comment({
            post, user, body
        });

        //saved the comment object into the database
        const savedComment = await comment.save();

        //find the post by id, and then new comment is update in the comment array
        //push ek new entry ya phir ek entry ko update karne ke liye use hota hai
        //and pull is used to delete an entry
        //new true ka mtlb hota hai ki jo bhi updatd post aayegi, vo latest naye vaale hi aaye and purane vali nahin
        const updatedPost = await Post.findByIdAndUpdate(post, { $push: { comments: savedComment._id } }, { new: true })
            .populate("comments")//populate the comments array with comment documents
            .exec();

        res.json({
            post: updatedPost,
        });
    }
    catch (error) {
        return res.status(500).json({
            error: "error while creating comments",
        });
    }
}