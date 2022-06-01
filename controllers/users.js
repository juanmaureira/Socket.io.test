const { save } = require("../models");

const setUser = (req, res) => {
  console.log("user -> ", req.body);
  save();
  return res.send("Hola mundo");
};

module.exports = {
  setUser,
};
