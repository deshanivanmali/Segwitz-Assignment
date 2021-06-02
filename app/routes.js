const middleware = require("./middleware"),
salescontroller = require('./controllers/sale');
module.exports = (app) => {
  /**
   * @description initial point of the AP to show documentation link
   */
  app.get("/", (req, res) => {
    return res.send(200, {
      status: 200,
      message: "Documentation link",
      // data: process.env.DOCUMENTATION_LINK,
    });
  });

  /**
   * @version v1
   * @description add Sales data
   */
  app.post(
    "/sales/add",
    middleware.sales.save,
    salescontroller.create
  );

  // app.get(
  //   "/sales/:id/:datetype",
  //   controller.sales.get
  // );
};
