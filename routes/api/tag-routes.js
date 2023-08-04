const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

// Get all Tags
router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tags found." });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one Tag by id
router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          through: ProductTag,
        },
      ],
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id." });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create new Tag
router.post("/", async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);

    if (!req.body) {
      res.status(400).json(`Must send a body with request.`);
    }

    res.status(200).json({ message: "Tag has been updated.", tagData });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a Tag by id
router.put("/:id", async (req, res) => {
  try {
    const tagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id." });
      return;
    }

    res.status(200).json(`Tag has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a Tag by id
router.delete("/:id", async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: "No tag found with that id." });
      return;
    }

    res.status(200).json(`Tag has been deleted.`);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
