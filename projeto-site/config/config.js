module.exports = {
  production: {
    username: 'matheus17',
    password: '#Gf50306230860',
    database: 'ProjIndivisual',
    host: 'matheus17.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'matheus17',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};