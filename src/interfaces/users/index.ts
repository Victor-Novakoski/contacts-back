import { iContact } from '../contact'

export interface IUserRequest {
  name: string
  email: string
  password: string
  phone: string
  imageProfile?: string
}

export interface IUser {
  id: string
  name: string
  email: string
  phone: string
  imageProfile?: string
  isAdm: boolean
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

export interface IUserReturn {
  id?: string
  name?: string
  email?: string
  phone?: string
  isAdm?: boolean
  isActive?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IUserUpdate {
  name?: string
  email?: string
  password?: string
  phone?: string
  imageProfile?: string
}

export interface iUserResponse {
  id: string
  name?: string
  email?: string
  imageProfile?: string
  isAdm: boolean
}
