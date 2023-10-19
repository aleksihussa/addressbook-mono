import mongoose, { Schema, Document } from 'mongoose'

export interface IContact extends Document {
    name: string
    address: string
    phoneNumber: string
}

const ContactSchema: Schema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
})

const Contact = mongoose.model<IContact>('Contact', ContactSchema)
export default Contact
