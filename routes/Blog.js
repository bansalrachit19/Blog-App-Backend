//router ko leke aao pehle
const express = require("express");
const router = express.Router();

//import contollers
const { dummyRoute } = require("../controller/likeController");
const { createComment } = require("../controller/commentController");
const { createPost, getAllPosts } = require("../controller/postController");
//map karo
router.get("/dummyRoute", dummyRoute);
router.post("/comments/create", createComment);
router.post("/post/create", createPost);
router.get("/posts", getAllPosts);

//export karo
module.exports = router;