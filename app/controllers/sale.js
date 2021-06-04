const db = require("../models");
const Sales = db.sales;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Validate request
//   if (!req.body.amount) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }

  // // Create a 
  const bodyData = {
    userName: req.body.userName,
    amount: req.body.amount,
    cratedat:new Date()
     //createdat: new Date()//req.body.createdat     
  };
console.log("BODY DATA ",req.body)
try {
  
  Sales.create(bodyData)
  .then((data) => {

      console.log("data",data);

      return res.json(data);
  })
  .catch((err) => {
      console.log("err",err);
   return res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Sales.",
    });
  });
} catch (error) {
  console.log("ERROR ",error)
}
  // Save  in the database
  // console.log("req.body",req.body);
 
};
exports.getDataByParams=(req,res)=>{
  const { Pool, Client } = require("pg");

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'Segwitz-Assignment',
  password: 'admin',
  port: 5432,
});
console.log("PARAMS ",req.params.value);
let query;
if(req.params.value=='daily'){
query="select sum(amount) as stats_amount from sales where cratedat>current_date"
}
if(req.params.value=='weekly'){
  query=""
  }
  if(req.params.value=='monthly'){
    query="SELECT * from sales"
    }
pool.query(query, (err, response) => {
  
  let data=response.rows 
  pool.end();
  return res.json(data);
});
}
