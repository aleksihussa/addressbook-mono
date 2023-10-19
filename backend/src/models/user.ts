import mongoose from 'mongoose'

import Contact from './contact'

// Define the schema for the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    contacts: {
        type: [Contact.schema],
        ref: 'Contact',
        required: false,
    },
})

// Create the user model
const User = mongoose.model('User', userSchema)

export default User
