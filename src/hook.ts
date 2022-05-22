import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import WhatsApp from './heyoo'
import ProcessPayload from './heyoo/processNotificationPayload'
import { NotificationPayload } from './types/event'


const app = express()
const port = process.env.LISTEN_PORT


// Middleware 
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let messenger = new WhatsApp(process.env.TOKEN, "101404072591160")
let VERIFY_TOKEN =  "30cca545-3838-48b2-80a7-9e43b1ae8ce4"


app.get('/webhook', (req: Request, res:Response) => {

    console.log("Request Method: ", req.method)
    console.log("Request Data: ", req.method == "GET" ? req.query : req.body)

    // Handle Verification
    if (req.method == "GET"  && req.query["hub.verify_token"]){
        let hub:any = req.query
        console.log("Hub: ", hub)
        let verify_token = req.query["hub.verify_token"]

        if (verify_token == VERIFY_TOKEN){
          return res.send(req.query["hub.challenge"])
        }
        return res.send("Invalid verification token")
    }

    // Handle other notifications
    if (req.method == "POST"){
        let data: NotificationPayload = req.body
        let ppayload = new ProcessPayload(data)

        if (ppayload.type == "messages"){
            let messages = ppayload.get_messages()

            for (const message of messages){
                if (message.type == "text"){
                  let phone = message.from

                  messenger.send_message("Ever seen a flying cat", phone)
                }
            }
        } 

    }

    return res.send("This is a default response")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})