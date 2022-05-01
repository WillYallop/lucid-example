module.exports = {
    build: './dist',
    app_urL: 'http://192.168.1.153:7343',
    key: process.env.KEY,
    storage: {
        location: 'aws', // or 'local'
        // optional
        aws: {
            bucket: process.env.S3_BUCKET_NAME,
            access_key_id: process.env.S3_ACCESS_KEY_ID,
            secret_access_key: process.env.S3_SECRET_ACCESS_KEY
        }
    },
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