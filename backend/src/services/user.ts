import { User } from '../models'
import { User as UserType } from '../types'

export async function saveUser(user: UserType) {
    const newUser = new User(user)
    const savedUser = await newUser.save()
    return savedUser
}

export async function getUserById(id: string) {
    const user = await User.findById(id)
    return user
}
