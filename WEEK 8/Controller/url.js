const URL = require("../Models/url");
const { nanoid } = require("nanoid");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ err: "URL is required" });
  }
  const ShortID = nanoid(8);

  await URL.create({
    shortId: ShortID,
    RedirectedURL: body.url,
    visitHistory: [],
  });

  return res.render("home", { id: ShortID });
}

// async function handleShowURL(req,res){

//     const shortID = req.params.shortId
//     try {
//         const data = await URL.findOne({ shortId: shortID });

//         if (!data) {
//             return res.status(404).json({ error: "Short URL not found" });
//         }

//         return res.status(200).json(data);
//     } catch (err) {
//         console.error("Error fetching short URL:", err);
//         return res.status(500).json({ error: "Internal Server Error" });
//     }

// }

async function handleShowURL(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.RedirectedURL);
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    TotalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = {
  handleGenerateNewShortURL,
  handleShowURL,
  handleGetAnalytics,
};
