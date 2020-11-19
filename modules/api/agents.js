import { pool } from '../../config'

export const getAgents = (request, response) => {
  console.log('Starting get Agents request')
  pool.query(
    'SELECT * FROM agents',
    (error, result) => {
      console.log('ERROR:', error)
      console.log('RESULT', result)
      if (error) {
        console.log('ERROR:', error)
        // throw(error)
      }

      response.status(200).json(result.rows || [])
    })
}

export const addAgent = (request, response) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    bio = null,
      url,
    imgUrl = null,
      agentHeaderId,
    website = null
  } = request.body
  pool.query(
    'INSERT INTO agents (firstName, lastName, email, phone, bio, url, imgUrl, agentHeaderId, website) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [ firstName, lastName, email, phone, bio, url, imgUrl, agentHeaderId, website ],
    () => {
      response.status(201).json({ message: 'Agent added' })
    }
  )
}

export const getAgent = (request, response) => {
  const { id } = request.query
  pool.query(
    `SELECT * FROM agents where id = ${id} LIMIT 1`, (error, result) => {
      if (error) {
        throw error
      }

      response.status(200).json(result ? result.rows[0] : {})
    })
}

export const deleteAgent = (request, response) => {
  const { id } = request.params
  pool.query(
    `DELETE FROM agents WHERE id = ${id}`, (error) => {
      if (error) {
        throw error
      }

      response.status(200)
    })
}

export const updateAgent = (request, response) => {
  const { id } = request.params
  const {
    firstName,
    lastName,
    email,
    phone,
    bio,
    url,
    imgUrl,
    website
  } = request.body

  const query = `UPDATE agents SET firstName=${firstName} lastName=${lastName} email=${email} phone=${phone} bio=${bio} url=${url} imgUrl=${imgUrl} website=${website} WHERE id = ${id}`
  pool.query(query, (error) => {
    if (error) {
      throw error
    }

    response.status(200)
  })
}

// import Agent from '../models/agent'
//
// export const addAgent = (req, res) => {
//   let imgUrl = req.body.imgUrl ? req.body.imgUrl.trim() : 'g8ub1qa56ybzp0s/default.png'
//   new Agent({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     phone: req.body.phone,
//     bio: req.body.bio,
//     url: req.body.url.trim(),
//     imgUrl: imgUrl,
//     website: req.body.website
//   }).save( (err, agent) => {
//     if (err) {
//       return res.status(500).json(err.message)
//     } else {
//       return res.json(agent)
//     }
//   })
// }
//
// export const getAgents = (req, res) => {
//   Agent.find({}, null, { sort: { lastName: 1 } }, (err, agents) => {
//     res.json(agents)
//   })
// }
//
// export const getAgent = (req, res) => {
//   Agent.findOne({ url: req.query.url }, (err, agent) => {
//     if (agent)
//       return res.json(agent)
//     else
//       return res.status(404)
//   })
// }
//
// export const deleteAgent = (req, res) => {
//   Agent.remove({ _id: req.body.id }, (err) => {
//     if (err)
//       return res.status(500).json(err)
//     else
//       return res.status(200).json({ msg: 'Deleted' })
//   })
// }
//
// export const updateAgent = (req, res) => {
//   let imgUrl = req.body.imgUrl === '' ? 'g8ub1qa56ybzp0s/default.png' : req.body.imgUrl.trim()
//   let query = { '_id': req.body.id }
//   let update = {
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     phone: req.body.phone,
//     bio: req.body.bio,
//     url: req.body.url,
//     imgUrl: imgUrl,
//     website: req.body.website
//   }
//   Agent.findOneAndUpdate(query, update, {}, (err, agent) => {
//     if (err) {
//       return res.status(500).json(err.msg)
//     } else {
//       return res.json(agent)
//     }
//   })
// }
