const mongoose = require("mongoose");
// const slugify = require("slugify");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product must have a name"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

//DOCUMENT MIDDLEWWARE
// productSchema.pre("save", function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
