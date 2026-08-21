const {nanoid} = require('nanoid');
const URL = require('../models/url');

async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url){
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortId = nanoid(8);

    // Implementation for generating new short URL

    await URL.create({
        shortId: shortId,
        redirectURL: req.body.url,
        visitHistory: [],              // show the history of the user who visited the short URL
    });
    return res.json({ shortId: shortId });
}

async function handleGetAnalytics(req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
}
