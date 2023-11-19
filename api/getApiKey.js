const apiKey = process.env.API_KEY || "default_api_key";

module.exports = (req, res) => {
  res.status(200).json({ apiKey });
};
