const db = require("../models");
const Sales = db.sales;
const Op = db.Sequelize.Op;
const moment=require('moment');
const { months } = require("moment");
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
var startDates=new Date();

// console.log(moment(startDates).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss'))
let query;
if(req.params.value=='daily'){
query='SELECT date("sales"."createdAt"),extract(hour from "sales"."createdAt") as hour, sum("amount") AS "total" FROM "sales" WHERE "sales"."createdAt"<=current_date group by extract(hour from "sales"."createdAt"), date("sales"."createdAt") order by 1,2 ;'
}
if(req.params.value=='weekly'){
  var sdate="'"+moment(startDates).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')+"'"
  startDates.setDate(startDates.getDate() - 7);
  
  var weekEdn="'"+moment(startDates).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')+"'";
  
  query='SELECT extract(week from "sales"."createdAt") as week, date("sales"."createdAt"), sum("amount") AS "total" FROM "sales"  WHERE "sales"."createdAt" BETWEEN '+weekEdn+' AND '+sdate+' group by   extract(week from "sales"."createdAt"), date("sales"."createdAt") order by 1,2;'
  }
  if(req.params.value=='monthly'){
    var sdate="'"+moment(startDates).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')+"'"
    startDates.setDate(startDates.getDate() - 30);
    
    var weekEdn="'"+moment(moment().subtract(30, 'days')).tz('Asia/Kolkata').format('YYYY-MM-DD HH:mm:ss')+"'";
    query='SELECT date("sales"."createdAt"), sum("amount") AS "total" FROM "sales" WHERE "sales"."createdAt"  BETWEEN '+weekEdn+' AND '+sdate+' group by   date("sales"."createdAt") order by 1;'
    }
pool.query(query, (err, response) => {
  console.log(query)
  let data=response.rows; 
  pool.end();
  return res.json(data);
});
}
