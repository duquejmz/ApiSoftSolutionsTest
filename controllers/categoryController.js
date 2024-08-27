import Category from "../models/category.js";

export async function getCategory (req, res) {
  const categories = await Category.find();
  res.json(categories);
};

export async function postCategory (req, res) {
  try {
      const { name } = req.body;

      // Imprime los datos que recibes para verificar que req.body tenga la información correcta
      console.log("Datos recibidos:", { name });

      // Crea un nuevo documento
      const newCategory = new Category({
          name
      });

      // Guarda el documento en la base de datos
      await newCategory.save();

      // Devuelve una respuesta exitosa
      res.status(201).json(newCategory);
  } catch (error) {
      // Imprime el error para ayudar a depurar
      console.error("Error al guardar el documento:", error);

      // Devuelve una respuesta de error
      res.status(500).json({ msg: "Error al guardar el documento", error });
  }
};
