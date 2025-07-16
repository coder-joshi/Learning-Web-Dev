const URL = require("../Models/model.url");
const { nanoid } = require("nanoid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ err: "URL is required" });
  }

  const shortID = nanoid(8);

  await URL.create({
    shortId: shortID,
    RedirectedURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render("home", { id: shortID });
}

async function handleShowURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.RedirectedURL);
}

module.exports = { handleGenerateNewShortURL,handleShowURL };
