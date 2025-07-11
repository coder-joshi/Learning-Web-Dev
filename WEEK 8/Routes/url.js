const express = require("express")
const router =  express.Router()
const {handleGenerateNewShortURL,handleShowURL,handleGetAnalytics} = require("../Controller/url")


router.post("/",handleGenerateNewShortURL)

router.get("/:shortId",handleShowURL)

router.get("/analytics/:shortId",handleGetAnalytics)

module.exports = router