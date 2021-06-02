const db = require("../models");
const Tutorial = db.sales;
const Op = db.Sequelize.Op;
exports.create = (req, res) => {
  // Validate request
//   if (!req.body.amount) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }

  // // Create a Tutorial
  const tutorial = {
    username: req.body.userName,
    amount: req.body.amount,
     createdat: req.body.createdat 
    
  };

  // Save Tutorial in the database
  console.log("req.body555",req.body);
  Tutorial.create(tutorial)
    .then((data) => {
        console.log("data",data);
      res.send(data);
    })
    .catch((err) => {
        console.log("err",err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};
