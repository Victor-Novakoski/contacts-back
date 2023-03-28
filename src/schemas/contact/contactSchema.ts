import * as yup from 'yup'
import {
  iContact,
  iContactRequest,
  IcontactUpdate,
} from '../../interfaces/contact'

const regexPhone = /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/

const contactSerializer: yup.SchemaOf<iContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(regexPhone)
    .required('phone number is required')
    .min(8)
    .max(11),
})

const contactUpdateSerializer: yup.SchemaOf<IcontactUpdate> = yup
  .object()
  .shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    phone: yup.string().matches(regexPhone).notRequired().min(8).max(11),
  })

const contactReturnSerializer: yup.SchemaOf<iContact> = yup.object({
  id: yup.string().notRequired(),
  name: yup.string().required(),
  email: yup.string().email('Invalid email format').required(),
  phone: yup.string().required(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
})

const contactsReturnSerializer: yup.SchemaOf<iContact[]> = yup.array().of(
  yup.object().shape({
    id: yup.string().notRequired(),
    name: yup.string().notRequired(),
    email: yup.string().notRequired(),
    phone: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
  })
)

export {
  contactSerializer,
  contactReturnSerializer,
  contactUpdateSerializer,
  contactsReturnSerializer,
}
