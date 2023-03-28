import * as yup from 'yup'
import {
  IUser,
  IUserRequest,
  IUserReturn,
  IUserUpdate,
} from '../../interfaces/users'

const regexPhone = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/

const userSerializer: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  imageProfile: yup
    .string()
    .required()
    .default(
      'https://argumentumpericias.com.br/biblioteca/2019/09/sem-imagem-avatar.png'
    ),
  phone: yup
    .string()
    .matches(regexPhone)
    .required('phone number is required')
    .min(8),
})

const userUpdateSerializer: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
  phone: yup.string().matches(regexPhone).notRequired().min(8).max(11),
  imageProfile: yup.string().notRequired(),
})

const userReturnSerializer: yup.SchemaOf<IUser> = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().email('Invalid email format').required(),
  phone: yup.string().required(),
  imageProfile: yup.string().required(),
  isAdm: yup.boolean().required(),
  isActive: yup.boolean().required(),
  createdAt: yup.date().required(),
  updatedAt: yup.date().required(),
})

const usersReturnSerializer: yup.SchemaOf<IUserReturn[]> = yup.array().of(
  yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    isAdm: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
    imageProfile: yup.string().notRequired(),
  })
)

export {
  userSerializer,
  userReturnSerializer,
  userUpdateSerializer,
  usersReturnSerializer,
}
