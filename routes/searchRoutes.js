router.get("/api/secondchance/search", async (req, res) => {
  const db = await connectToDatabase();
  const { category } = req.query;
  const items = await db.collection("secondChanceItems").find({ category }).toArray();
  res.json(items);
});
