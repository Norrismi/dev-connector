const express = require("express");
const router = express.Router();

//only need /test, bc app.use() in server.js
//@route    GET api/users/test
//@desc     Test users route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Users Works" }));

module.exports = router;
