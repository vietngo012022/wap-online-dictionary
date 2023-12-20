const express = require("express");
const getWordFromDictionary = require("../controllers/controller");

const router = express.Router();

router.route("/").get(getWordFromDictionary);

module.exports = router;
