const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) {
  require('dotenv').config()
}

const pg = require('pg')
const { Pool } = pg
pg.defaults.ssl = true

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?ssl=true`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString
})

module.exports = { pool }
