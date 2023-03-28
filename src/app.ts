import express from 'express'
import 'express-async-errors'
import handleError from './errors/handleError'
import authRouter from './routes/auth.routes'
import ContactRouter from './routes/contact.routes'
import usersRouter from './routes/users.routes'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(cors())
app.use('/users', usersRouter)
app.use('/auth', authRouter)
app.use('/contact', ContactRouter)

app.use(handleError)

export default app
