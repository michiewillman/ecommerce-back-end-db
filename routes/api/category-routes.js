const router = require("express").Router();
const { Category, Product } = require("../../models");
const { findByPk, findAll } = require("../../models/Product");

// The `/api/categories` endpoint

// Get all categories from database
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

// Get specific category in database from id
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Product,
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id." });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create category in database
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });

    res
      .status(200)
      .json(`Category ${categoryData.category_name} has been created.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update category in database
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id." });
      return;
    }

    await categoryData.save();

    res.status(200).json(`Category has been updated.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete categoryfrom database
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!categoryData) {
      res.status(404).json({ message: "No category found with that id." });
      return;
    }

    res.status(200).json(`Category has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
