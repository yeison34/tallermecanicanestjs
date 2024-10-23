const express = require("express");
const router = express.Router();
const { Cliente } = require("../models");

// Obtener todos los clientes
router.get("/", async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Obtener un cliente por ID
router.get("/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Crear un nuevo cliente
router.post("/", async (req, res) => {
  const { nombre, esActivo } = req.body;
  try {
    const nuevoCliente = await Cliente.create({ nombre, esactivo: esActivo });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Actualizar un cliente
router.put("/:id", async (req, res) => {
  const { nombre, esactivo } = req.body;
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await cliente.update({ nombre, esactivo });
    res.json(cliente);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Eliminar un cliente
router.delete("/:id", async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await cliente.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
