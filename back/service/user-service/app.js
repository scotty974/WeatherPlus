import express from 'express'
import cors from 'cors'
const userApp = express()
userApp.use(cors())
userApp.use(express.json())
userApp.use(express.urlencoded({ extended: true }))




export default userApp