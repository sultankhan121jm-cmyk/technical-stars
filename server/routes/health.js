import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    success: true,
    service: "Technical Stars API",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
    endpoints: ["/api/health", "/api/contact"],
  });
});

export { router as healthRouter };
