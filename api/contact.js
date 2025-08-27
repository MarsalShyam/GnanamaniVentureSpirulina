// Vercel Serverless Function (ES Modules)
// Put your Apps Script Web App URL here (the one that ends with /exec)
const GAS_URL = process.env.GAS_URL; // store in Vercel env var

export default async function handler(req, res) {
  const origin = req.headers.origin || "";

  // Allow localhost + your domains
  const ALLOWED_ORIGINS = [
    "http://localhost:5173",
    "https://your-domain.com",                  // replace with your real custom domain
    "https://gnanamani-venture-spirulina.vercel.app"  // your vercel domain (NO trailing slash!)
  ];

  const allowOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];

  // ✅ Handle preflight OPTIONS
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.setHeader("Vary", "Origin");
    return res.status(200).end();
  }

  // ✅ Reject non-POST methods
  if (req.method !== "POST") {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // Honeypot check (optional: protects from spam bots)
    if (req.body && typeof req.body === "object" && req.body._hp) {
      res.setHeader("Access-Control-Allow-Origin", allowOrigin);
      return res.status(200).json({ result: "success" });
    }

    // ✅ Forward to Google Apps Script
    const r = await fetch(GAS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body || {})
    });

    // GAS may return plain text or JSON → handle both
    const text = await r.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = { result: r.ok ? "success" : "error", raw: text };
    }

    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Vary", "Origin");
    return res.status(r.ok ? 200 : 500).json(json);

  } catch (e) {
    res.setHeader("Access-Control-Allow-Origin", allowOrigin);
    res.setHeader("Vary", "Origin");
    return res.status(500).json({ result: "error", error: e.message });
  }
}
