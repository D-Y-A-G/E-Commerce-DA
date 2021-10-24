// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category

Product.belongsTo(Category, { foreignKey: "category_id", onDelete: "CASCADE" });

// Categories have many Products
Category.hasMany(Product, { foreignKey: "category_id", onDelete: "CASCADE" }); //changed reader_id to category_id

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "product_id",
  },
  as: "idTag",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
    foreignKey: "product_tag",
  },
  as: "productId",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
