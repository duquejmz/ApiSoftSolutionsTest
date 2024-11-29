import Category from "../models/Servicios/category.js";

export async function getCategory (req, res) {
  const categories = await Category.find();
  res.json(categories);
};

export async function postCategory (req, res) {
  try {
      const { name, description } = req.body;

      // Imprime los datos que recibes para verificar que req.body tenga la información correcta
      console.log("Datos recibidos:", { name });

      // Crea un nuevo documento
      const newCategory = new Category({
          name,
          description
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

export async function putCategory(req, res) {
    const { id } = req.params;

    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        category.id = id;
        await category.save();
        res.status(200).json({ message: 'Updated Category' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export async function deleteCategory (req, res) {
    try {
        const categories = await Category.findById(req.params.id);

        if (!categories) {
            return res.status(404).json({ error: 'Category not found' });
        }
        await Category.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'The category has been deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
