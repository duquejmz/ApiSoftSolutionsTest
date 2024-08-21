const Product = require("../models/products");

const getProduct = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

const postProduct = async (req, res) => {
  try {
      const { name, price, stock } = req.body;

      // Imprime los datos que recibes para verificar que req.body tenga la información correcta
      console.log("Datos recibidos:", { name, price, stock });

      // Crea un nuevo documento
      const newProduct = new Product({
          name,
          price,
          stock
      });

      // Guarda el documento en la base de datos
      await newProduct.save();

      // Devuelve una respuesta exitosa
      res.status(201).json(newProduct);
  } catch (error) {
      // Imprime el error para ayudar a depurar
      console.error("Error al guardar el documento:", error);

      // Devuelve una respuesta de error
      res.status(500).json({ msg: "Error al guardar el documento", error });
  }
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
