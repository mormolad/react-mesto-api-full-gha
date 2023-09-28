const { isJWT, getPayload } = require("../utils/jwt");
const { CustomeError } = require("../utils/handlerErrors");
const { errLogin, noAuth } = require("../errors");

const auth = (req, res, next) => {
  console.log(noAuth.message, "4123412342");
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer ")
  ) {
    next(new CustomeError(noAuth.code, noAuth.message));
  }
  console.log(req.headers.authorization);
  const token = req.headers.authorization.replace("Bearer ", "");
  isJWT(token)
    ? (req.user = { _id: getPayload(token)._id })
    : next(new CustomeError(errLogin.code, errLogin.message));

  next();
};

module.exports = auth;
