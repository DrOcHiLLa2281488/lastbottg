module.exports = (Product) => {
  const router = require('express').Router();

  router.get('/products', async (req, res) => {
    try {
      const products = await Product.getAll();
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  router.get('/search', async (req, res) => {
    const query = req.query.q;
    if (!query) return res.json([]);
    
    try {
      const results = await Product.search(query);
      res.json(results);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

  return router;
};

