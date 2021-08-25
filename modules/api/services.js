import { pool } from '../../config'

export const addService = (req, res) => {
  const {
    name,
    url,
    phone,
    category
  } = req.body

  pool.query(
    'INSERT INTO services (name, url, phone, category) VALUES ($1, $2, $3, $4)',
    [ name, phone, category, url ],
    () => {
      res.status(201).json({ message: 'Service Added' })
    }
  )
}

export const getServices = (req, res) => {
  pool.query(
    'SELECT * FROM services',
    (error, result) => {
      if (error) {
        console.log(error)
      }

      res.status(200).json(result.rows || [])
    })
}

export const deleteService = (req, res) => {
  const { id } = req.params
  pool.query(
    `DELETE FROM services WHERE id = ${id}`, (error) => {
      if (error) {
        throw error
      }

      res.status(200)
    }
  )
}

export const updateService = (req, res) => {
  const { id } = req.params
  const {
    name,
    url,
    category,
    phone
  } = req.body

  const query = `UPDATE services SET name=${name} phone=${phone} category=${category}, url=${url} WHERE id = ${id}`
  pool.query(query, (error) => {
    if (error) {
      throw error
    }

    res.status(200)
  })
}

// export const updateService = (req, res) => {
//   let query = { _id: req.body.id }
//   let update = {
//     name: req.body.name,
//     url: req.body.url,
//     phone: req.body.phone
//   }
//   Service.findOneAndUpdate(query, update, {}, (err, service) => {
//     if (err)
//       return res.status(500).json(err.msg)
//     return res.json(service)
//   })
// }
//export const deleteService = (req, res) => {
//  Service.find({ _id: req.body.id }).remove().exec()
//  res.status(200).json({ id: req.body.id })
//}
// export const getServices = (req, res) => {
//   let query = {}
//   if (req.query.category && req.query.category !== '')
//     query = { category: req.query.category }
//   Service.find(query, (err, services) => {
//     if (err)
//       return res.status(500).json(err.message)
//     return res.json(services)
//   })
// }
// export const addService = (req, res) => {
//   new Service({
//     name: req.body.name,
//     url: req.body.url,
//     phone: req.body.phone,
//     category: req.body.category
//   }).save( (err, service) => {
//     if (err) {
//       return res.status(500).json(err.message)
//     } else {
//       return res.json(service)
//     }
//   })
// }
