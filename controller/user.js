const User = require("../db/models/user");

const getUser = async (req, res, next) => {
  try {
    const user = await User.query().findById(req.params.id).withGraphFetched("channel");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = { getUser };
