const { save } = require("../models");

const setUser = (req, res) => {
  console.log("user -> ", req.body);
  save();
  return res.status(200).send({});
};

module.exports = {
  setUser,
};
