export interface iContactRequest {
  name: string
  email: string
  phone: string
}

export interface iContact {
  id?: string
  name: string
  email: string
  phone: string
  createdAt?: Date
  updatedAt?: Date
}
export interface iContacts {
  id?: string
  name?: string
  email?: string
  phone?: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IcontactUpdate {
  name?: string
  email?: string
  phone?: string
}
