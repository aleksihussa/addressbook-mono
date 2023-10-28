import { Contact as ContactModel, User } from '../models'

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

export const getContacts = async ({ phoneNumber }): Promise<any[]> => {
    try {
        const user = await User.findOne({ phoneNumber })
        return user.contacts
    } catch (error) {
        throw new Error(`Error fetching contacts: ${error.message}`)
    }
}
