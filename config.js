const isProduction = process.env.NODE_ENV === 'production'

if (!isProduction) {
  require('dotenv').config()
}

const { Pool } = require('pg')

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: {
    refjectUnauthorized: false
  }
})

module.exports = { pool }
