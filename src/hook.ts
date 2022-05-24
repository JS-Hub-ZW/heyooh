import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import WhatsApp from './heyoo'
import NotificationController from './controllers/notificationController'
import VerificationController from './controllers/verificationController'



const app = express()
const port = process.env.LISTEN_PORT


// Middleware 
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// let messenger = new WhatsApp(process.env.TOKEN, "101404072591160")


// Routes
app.get('/', VerificationController.handleVerification)
app.post("/", NotificationController.handleNotifications)

// Listen on service
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})