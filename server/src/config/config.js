module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'tabbrowse',
        user: process.env.DB_USER || 'tabbrowse',
        password: process.env.DB_PASS || 'tabbrowse',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabbrowse.sqlite'
        }
    }
}