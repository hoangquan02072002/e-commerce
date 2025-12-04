const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    image: {
      type: String,
      required: false,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { timestamps: true }
);

module.exports = model("admin", adminSchema);
