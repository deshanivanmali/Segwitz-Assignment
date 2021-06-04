module.exports = (sequelize, Sequelize) => {
    const sales = sequelize.define("sales", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true       
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

    },
    {
      timestamps: true,
      underscored: false,
      paranoid:true,
      tableName: 'sales'
    }
    )
  
    return sales;
  };