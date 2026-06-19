import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import { contactRouter } from "./routes/contact.js";
import { healthRouter } from "./routes/health.js";

dotenv.config({ path: new URL("../.env", import.meta.url) });

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5174";

// ─── Security ───
app.use(helmet());
app.use(cors({
  origin: [FRONTEND_URL, "http://localhost:5174", "http://localhost:5175"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

// ─── Rate Limiting ───
app.use("/api/", rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX) || 5,
  message: { success: false, error: "Too many requests. Please try again later." },
  standardHeaders: true,
  legacyHeaders: false,
}));

// ─── Body Parsing ───
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true }));

// ─── Routes ───
app.use("/api/health", healthRouter);
app.use("/api/contact", contactRouter);

// ─── 404 ───
app.use("/api", (_req, res) => {
  res.status(404).json({ success: false, error: "Endpoint not found" });
});

// ─── Global Error Handler ───
app.use((err, _req, res, _next) => {
  console.error("❌ Server Error:", err.message);
  res.status(500).json({ success: false, error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`✅ Technical Stars API running on http://localhost:${PORT}`);
  console.log(`   Frontend: ${FRONTEND_URL}`);
});

export default app;
