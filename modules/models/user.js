import mongoose from 'mongoose'
let Schema = mongoose.Schema
import passportLocalMongoose from 'passport-local-mongoose'

let User = new Schema({
  username: String,
  password: String,
})

User.plugin(passportLocalMongoose)

export default mongoose.model('User', User)
