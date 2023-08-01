const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findByPk, findAll } = require("../../models/Product");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product,
    });

    if (!categoryData) {
      res.status(404).json({ message: "No categories found." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const idCategory = await Category.findByPk(req.params.id, {
      include: Product,
    });

    if (!idCategory) {
      res.status(404).json({ message: "No category found with that id." });
      return;
    }

    res.status(200).json(idCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product,
    });

    // create a new category

    res.status(200).json(`Category has been added.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Product,
    });
    // add logic to update category

    res.status(200).json(`Category has been updated`);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: Product,
    });

    // delete a category by its `id` value

    res.status(200).json(`Category has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
