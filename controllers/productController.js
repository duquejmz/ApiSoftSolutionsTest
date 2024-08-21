const Product = require("../models/products");

const getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const postProduct = async (req, res) => {
  let msg = "Product inserted";
  const body = req.body;
  try {
    const product = new Product(body);
    await product.save();
  } catch (error) {
    msg = error;
  }
  res.json({ msg: msg });
};

const putProduct = async(req, res) => {
    const {name, price, stock} = req.body
    let msg = 'Product Update'
    try {
        await Product.findOneAndUpdate({name : name}, {price : price, stock : stock})
    } catch (error) {
        msg = error
    }
    res.json ({ msg : msg })
}

const deleteProduct = async(req, res) => {
    let msg = 'Product deleted'
    id = req.params.id
    try {
        await Product.findByIdAndDelete({_id: id})
    } catch (error) {
        msg = 'There was a problem while deleting'
    }
    res.json ({ msg : msg})
}

module.exports = {
  getProduct,
  postProduct,
  putProduct,
  deleteProduct
};
