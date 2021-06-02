module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Dipal@0708",
    DB: "Segwitz-Assignment",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };