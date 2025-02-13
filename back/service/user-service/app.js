import express from 'express'
import cors from 'cors'
import user from './router/user-router.js'
const userApp = express()
userApp.use(cors())
userApp.use(express.json())
userApp.use(express.urlencoded({ extended: true }))

userApp.use('/user', user)


export default userApp