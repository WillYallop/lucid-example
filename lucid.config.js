module.exports = {
    https: false,
    domain: 'lucid.local',
    directories: {
        theme: './lucid/theme',
        templates: './templates',
        temp: './temp',
        // Dists 
        dist: './dist/app',
        assets_dist: './dist/assets'
    },
    database: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
    }
}