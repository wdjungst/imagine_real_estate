import Agent from '../models/agent'

export const addAgent = (req, res) => {
  let imgUrl = req.body.imgUrl ? req.body.imgUrl.trim() : 'g8ub1qa56ybzp0s/default.png'
  new Agent({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    bio: req.body.bio,
    url: req.body.url.trim(),
    imgUrl: imgUrl,
    website: req.body.website
  }).save( (err, agent) => {
    if (err) {
      return res.status(500).json(err.message)
    } else {
      return res.json(agent)
    }
  })
}

export const getAgents = (req, res) => {
  Agent.find({}, null, { sort: { lastName: 1 } }, (err, agents) => {
    res.json(agents)
  })
}

export const getAgent = (req, res) => {
  Agent.findOne({ url: req.query.url }, (err, agent) => {
    if (agent)
      return res.json(agent)
    else
      return res.status(404)
  })
}

export const deleteAgent = (req, res) => {
  Agent.remove({ _id: req.body.id }, (err) => {
    if (err)
      return res.status(500).json(err)
    else
      return res.status(200).json({ msg: 'Deleted' })
  })
}

export const updateAgent = (req, res) => {
  let imgUrl = req.body.imgUrl === '' ? 'g8ub1qa56ybzp0s/default.png' : req.body.imgUrl.trim()
  let query = { '_id': req.body.id }
  let update = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    bio: req.body.bio,
    url: req.body.url,
    imgUrl: imgUrl
  }
  Agent.findOneAndUpdate(query, update, {}, (err, agent) => {
    if (err) {
      return res.status(500).json(err.msg)
    } else {
      return res.json(agent)
    }
  })
}
