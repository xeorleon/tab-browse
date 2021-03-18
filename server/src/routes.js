const AuthenticationController = require("./controllers/AuthenticationController");

const AuthenticationControllerPoliciy = require("./policies/AuthenticationControllerPolicy");

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPoliciy.register,
    AuthenticationController.register
  );
};