module.exports = (sequelize, Sequelize) => {
    const sales = sequelize.define("sales", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    
        
      },
      
      cratedat: {
        type: Sequelize.DATE
      },
      userName: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.NUMBER
      },      
      createdAt:{
        type:Sequelize.DATE
      },
      updatedAt:{
        type:Sequelize.DATE
      }

    });
  
    return sales;
  };