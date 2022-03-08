module.exports = {
    build: './dist',
    allowOrigins: [
        "*"
    ],
    directories: {
        theme: './lucid/theme',
        templates: './templates'
    },
    database: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    }
}