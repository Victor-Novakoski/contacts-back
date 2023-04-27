import * as yup from 'yup'
import {
  iContact,
  iContactRequest,
  iContacts,
  IcontactUpdate,
} from '../../interfaces/contact'

const contactSerializer: yup.SchemaOf<iContactRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().required('phone number is required'),
})

const contactUpdateSerializer: yup.SchemaOf<IcontactUpdate> = yup
  .object()
  .shape({
    email: yup.string().email().notRequired(),
    name: yup.string().notRequired(),
    phone: yup.string().notRequired(),
  })

const contactReturnSerializer: yup.SchemaOf<iContact> = yup.object({
  id: yup.string(),
  name: yup.string().required(),
  email: yup.string().email('Invalid email format').required(),
  phone: yup.string().required(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
})

const contactsReturnSerializer: yup.SchemaOf<iContacts[]> = yup.array().of(
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
