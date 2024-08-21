const Category = require("../models/category");

const getCategory = async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
};

const postCategory = async (req, res) => {
  let msg = "Product inserted";
  const body = req.body;
  try {
    const category = new Category(body);
    await category.save();
  } catch (error) {
    msg = error;
  }
  res.json({ msg: msg });
};

module.exports = {
  getCategory,
  postCategory,
};
