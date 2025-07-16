const express = require("express");
const router = express.Router();
const {handleGenerateNewShortURL,handleShowURL} = require("../Controllers/controller.url")


router.post("/",handleGenerateNewShortURL);

router.get("/:shortId",handleShowURL);

module.exports = router;