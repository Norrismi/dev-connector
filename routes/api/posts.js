const express = require("express");
const router = express.Router();

//only need /test, bc app.use() in server.js
//@route    GET api/posts/test
//@desc     Test post route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;
