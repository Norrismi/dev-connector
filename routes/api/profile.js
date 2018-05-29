const express = require("express");
const router = express.Router();

//only need /test, bc app.use() in server.js
//@route    GET api/profile/test
//@desc     Test profile route
//@access   Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));

module.exports = router;
