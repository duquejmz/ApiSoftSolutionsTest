import Proveedor from "../models/Compras/proveedores.js";

export async function getSupplier (req, res) {
  const suppliers = await Proveedor.find();
  res.json(suppliers);
};

export async function postSupplier (req, res) {
  try {
      const { name, email, phone, address } = req.body;

      // Imprime los datos que recibes para verificar que req.body tenga la información correcta
      console.log("Datos recibidos:", { name, email, phone, address });

      // Crea un nuevo documento
      const newProveedor = new Proveedor({
          name,
          email,
          phone,
          address
      });

      // Guarda el documento en la base de datos
      await newProveedor.save();

      // Devuelve una respuesta exitosa
      res.status(201).json(newProveedor);
  } catch (error) {
      // Imprime el error para ayudar a depurar
      console.error("Error al guardar el documento:", error);

      // Devuelve una respuesta de error
      res.status(500).json({ msg: "Error al guardar el documento", error });
  }
};
