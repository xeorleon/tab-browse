const path = require('path')
module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'tabbrowse',
        user: process.env.DB_USER || 'tabbrowse',
        password: process.env.DB_PASS || 'tabbrowse',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: path.resolve(__dirname,'./tabbrowse.sqlite')
        }
    },
    authentication: {
        jwtSecret: process.env.JWT_SECRET || 'secret'
      }
}