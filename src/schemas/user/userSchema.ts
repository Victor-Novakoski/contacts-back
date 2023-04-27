import * as yup from 'yup'
import {
  IUser,
  IUserRequest,
  IUserReturn,
  IUserUpdate,
} from '../../interfaces/users'

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
  phone: yup.string().required('phone number is required'),
})

const userUpdateSerializer: yup.SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
  phone: yup.string().notRequired(),
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
