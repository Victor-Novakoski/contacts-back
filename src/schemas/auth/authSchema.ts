import * as yup from "yup";
import { IUserLogin } from "../../interfaces/users";

const authSchemaRequest: yup.SchemaOf<IUserLogin> = yup.object({
    email: yup.string().email().required(),
    password: yup.string().required(),
});

export { authSchemaRequest };
