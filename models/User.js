const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema(
    {
        id: Number,
        name: String,
        username: String,
        email: String
    }

)
module.exports = mongoose.model('user_tb', UserSchema)
