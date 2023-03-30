import express from "express";
const router = express.Router();

import { getTransaction } from "../controllers/transactionController.js";

router.get("/", getTransaction);

export default router;
