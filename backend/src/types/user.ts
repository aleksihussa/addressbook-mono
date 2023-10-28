import { Contact } from './contact'

export interface User {
    name: string
    email: string
    password: string
    contacts?: Contact[]
}
