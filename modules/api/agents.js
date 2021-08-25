import { pool } from '../../config'

const formattedBio = (bio) => {
  if (!bio) return
  return bio.replace(/'/g, '"')
}

export const getAgents = (request, response) => {
  console.log('Starting get Agents request')
  pool.query(
    'SELECT * FROM agents',
    (error, result) => {
      if (error) {
        console.log('ERROR:', error)
      }

      response.status(200).json(result.rows || [])
    })
}

export const addAgent = (request, response) => {
  const imgUrl = request.body.imgUrl ? request.body.imgUrl.trim() : 'g8ub1qa56ybzp0s/default.png'
  const {
    firstName,
    lastName,
    email,
    phone,
    bio = null,
    url,
    agentHeaderId,
    website = null
  } = request.body
  pool.query(
    'INSERT INTO agents (firstName, lastName, email, phone, bio, url, imgUrl, agentHeaderId, website) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    [ firstName, lastName, email, phone, formattedBio(bio), url, imgUrl, agentHeaderId, website ],
    () => {
      response.status(201).json({ message: 'Agent added' })
    }
  )
}

export const getAgent = (request, response) => {
  const { url } = request.query
  console.log('URL', url)
  pool.query(
    `SELECT * FROM agents where url = '${url}' LIMIT 1`, (error, result) => {
      if (error) {
        console.log(error)
      }

      response.status(200).json(result ? result.rows[0] : {})
    })
}

export const deleteAgent = (request, response) => {
  const node = request.params['0']
  const parts = node.split('/')
  const id = parts[parts.length - 1]
  pool.query(
    `DELETE FROM agents WHERE id = ${id}`, (error) => {
      if (error) {
        throw error
      }

      return response.status(200).json({})
    })
}

export const updateAgent = (request, response) => {
  const imgUrl = request.body.imgUrl ? request.body.imgUrl.trim() : 'g8ub1qa56ybzp0s/default.png'
  const node = request.params['0']
  const parts = node.split('/')
  const id = parts[parts.length - 1]
  const {
    firstName,
    lastName,
    email,
    phone,
    bio,
    url,
    website
  } = request.body

  const query = `UPDATE agents SET firstName='${firstName}', lastName='${lastName}', email='${email}', phone='${phone}', bio='${formattedBio(bio)}', url='${url}', imgUrl='${imgUrl}', website='${website}' WHERE id = ${id}`
  pool.query(query, (error) => {
    if (error) {
      console.log(error)
      return response.status(500).json(error)
    }

    return response.status(200).json({})
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
