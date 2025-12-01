module.exports = (db) => {
  return {
    getAll: async () => {
      const res = await db.query('SELECT * FROM products ORDER BY price ASC');
      return res.rows;
    },
    getById: async (id) => {
      const res = await db.query('SELECT * FROM products WHERE id = $1', [id]);
      return res.rows[0];
    },
    search: async (query) => {
      const res = await db.query(
        'SELECT * FROM products WHERE name ILIKE $1',
        [`%${query}%`]
      );
      return res.rows;
    }
  };
};
