import passport from 'passport'
import User from '../models/user'
import bcrypt from 'bcrypt'
import { pool } from '../../config'

const saltRounds = 10

export const signUp = (req, res) => {
  const {
    email: username,
    password
  } = req.body

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      pool.query(
        'INSERT INTO users (username, password) VALUES ($1, $2)',
        [ username, hash ], (err, user) => {
          if (err) {
            console.log('ERR', err)
          }
          res.status(201).json({ authenticated: true, id: user.id })
        }
      )
    })
})
}

export const signIn = (req, res) => {
  const {
    email: username,
    password
  } = req.body

  const hashResult = pool.query(
    `SELECT id, password FROM USERS where username = '${username}' LIMIT 1`, (err, result) => {
      if (err) {
        console.log('ERROR', err)
        return res.json(500, 'Invalid credentials')
      }

      const hash = result.rows[0].password
      const id = result.rows[0].id

      bcrypt.compare(password, hash, function (err, result) {
        if (!result || err) {
          console.log('AUTH RESULT', result)
          console.log('AUTH ERR', err)
          return res.json(500, 'Invalid credentials')
        }
        return res.status(201).json({ authenticated: true, id: id })
      })
    }
  )
}
