const jwt = require("jsonwebtoken");
module.exports.createToken = async (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
};
