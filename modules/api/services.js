import Service from '../models/service'

export const addService = (req, res) => {
  new Service({
    name: req.body.name,
    url: req.body.url,
    phone: req.body.phone,
    category: req.body.category
  }).save( (err, service) => {
    if (err) {
      return res.status(500).json(err.message)
    } else {
      return res.json(service)
    }
  })
}

export const getServices = (req, res) => {
  let query = {}
  if (req.query.category && req.query.category !== '')
    query = { category: req.query.category }
  Service.find(query, (err, services) => {
    if (err)
      return res.status(500).json(err.message)
    return res.json(services)
  })
}

export const deleteService = (req, res) => {
  Service.find({ _id: req.body.id }).remove().exec()
  res.status(200).json({ id: req.body.id })
}

export const updateService = (req, res) => {
  let query = { _id: req.body.id }
  let update = {
    name: req.body.name,
    url: req.body.url,
    phone: req.body.phone
  }
  Service.findOneAndUpdate(query, update, {}, (err, service) => {
    if (err)
      return res.status(500).json(err.msg)
    return res.json(service)
  })
}
