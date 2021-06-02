module.exports = (sequelize, Sequelize) => {
    const sales = sequelize.define("sales", {
      userName: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.STRING
      }
    });
  
    return sales;
  };