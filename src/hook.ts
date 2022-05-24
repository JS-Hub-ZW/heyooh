import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import VerificationController from './controllers/verificationController'
import NotificationController from './controllers/notificationController'



const app = express()
const port = process.env.LISTEN_PORT

// Middleware 
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())


//Routes
app.get('/', VerificationController.handleVerification)
app.post("/", NotificationController.handleNotifications)


// let messenger = new WhatsApp(process.env.TOKEN, "101404072591160")

// Listen on service
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app