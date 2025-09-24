const express = require("express");
const { connectToDatabase } = require("../models/db");
const router = express.Router();

router.get("/api/secondchance/items", async (req, res) => {
  const db = await connectToDatabase();
  const items = await db.collection("secondChanceItems").find().toArray();
  res.json(items);
});
router.get("/api/secondchance/items", async (req, res) => { ... });
router.get("/api/secondchance/items/:id", async (req, res) => { ... });
