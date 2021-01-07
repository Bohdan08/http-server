const express = require("express");
const router = express.Router();
const controllers = require("./../controllers/controllers");

router.get(/devices/, controllers.root);

module.exports = router;
