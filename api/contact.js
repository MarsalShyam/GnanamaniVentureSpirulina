// Vercel Serverless Function (CommonJS)
// Put your Apps Script Web App URL here (the one that ends with /exec)
const GAS_URL = process.env.GAS_URL; // safer via env var

module.exports = async (req, res) => {
  const origin = req.headers.origin || "";

  // Allow localhost and your prod domains
  const ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://your-domain.com",                 // <-- replace with your real domain
    "https://gnanamani-venture-spirulina.vercel.app/"       // <-- replace with your vercel domain
  ];

  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  // CORS preflight
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Vary", "Origin");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Basic honeypot (optional): drop obvious bots
    if (req.body && typeof req.body === "object" && req.body._hp) {
      res.setHeader("Access-Control-Allow-Origin", allowOrigin);
      return res.status(200).json({ result: "success" });
    }

    // Forward to Google Apps Script
    const r = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body || {})
    });

    // GAS may return text or JSON; handle both
    const text = await r.text();
    let json;
    try { json = JSON.parse(text); }
    catch { json = { result: r.ok ? "success" : "error", raw: text }; }

    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Vary", "Origin");
    return res.status(r.ok ? 200 : 500).json(json);

  } catch (e) {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Vary", "Origin");
    return res.status(500).json({ result: "error", error: e.message });
  }
};
