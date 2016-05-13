import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Service = new Schema({
  name: String,
  url: String,
  category: String,
  phone: String
})


export default mongoose.model('Service', Service)
