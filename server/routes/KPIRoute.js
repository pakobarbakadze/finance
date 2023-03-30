import express from "express";
const router = express.Router();

import { getKPI } from "../controllers/KPIController.js";

router.get("/", getKPI);

export default router;
