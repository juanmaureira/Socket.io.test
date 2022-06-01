const { save } = require("../models");

const setUser = (req, res) => {
  console.log("user -> ", req.body);
  save();
  return res.status(200).send("Hola mundo");
};

module.exports = {
  setUser,
};
