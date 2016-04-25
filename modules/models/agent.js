import mongoose from 'mongoose'
let Schema = mongoose.Schema

let Agent = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  bio: String,
  url: String,
  imgUrl: String
})


export default mongoose.model('Agent', Agent)
