const express = require("express");
const { connectToDatabase } = require("../models/db");
const router = express.Router();
const express = require("express");
const multer = require("multer");
const { connectToDatabase } = require("../db"); // adjust path if needed

router.post("/api/secondchance/items", upload.single("file"), async (req, res) => {
  try {
    const db = await connectToDatabase();
    const newItem = {
      name: req.body.name,
      category: req.body.category,
      file: req.file ? req.file.filename : null,
    };
    await db.collection("secondChanceItems").insertOne(newItem);
    res.json(newItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to insert item" });
  }
});

module.exports = router;

// configure multer upload folder
const upload = multer({ dest: "uploads/" });
router.get("/api/secondchance/items", async (req, res) => {
  const db = await connectToDatabase();
  const items = await db.collection("secondChanceItems").find().toArray();
  res.json(items);
});
router.get("/api/secondchance/items", async (req, res) => { ... });
router.get("/api/secondchance/items/:id", async (req, res) => { ... });
router.delete("/api/secondchance/items/:id", async (req, res) => {
  const db = await connectToDatabase();
  await db.collection("secondChanceItems").deleteOne({ _id: new ObjectId(req.params.id) });
  res.json({ success: true });
});