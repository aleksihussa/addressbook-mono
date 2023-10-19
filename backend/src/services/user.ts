import { Contact as ContactModel } from '../models'
import User from '../models/user'
import { Contact } from '../types'

export const saveContactToUser = async ({
    name,
    address,
    phoneNumber,
}: Contact): Promise<any> => {
    try {
        const contactToSave = new ContactModel({ name, address, phoneNumber })
        const user = await User.findOne({ phoneNumber })
        if (!user) {
            throw new Error()
        }
        user.contacts.push(contactToSave)

        const savedUser = await user.save()
        return savedUser
    } catch (error) {
        throw new Error(`Error saving user: ${error.message}`)
    }
}
