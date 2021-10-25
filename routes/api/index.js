const router = require("express").Router();
const { Category, ProductTag, Product, Tag } = require("../../models");
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

Product.belongsTo(Category, {
  foreignKey: "id",
});

Category.hasMany(Product, {
  foreignKey: "id",
});

Product.belongsToMany(Tag, {
  through: "product_tag",
  onDelete: "CASCADE",
});

Tag.belongsToMany(Product, {
  through: "product_tag",
  onDelete: "CASCADE",
});

module.exports = router;
