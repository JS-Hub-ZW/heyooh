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


app.get('/', (req: Request, res:Response) => {
    console.log("Request Data: ", req.query)

    // Handle Verification
    if (req.query["hub.verify_token"]){
        let hub:any = req.query
        console.log("Hub: ", hub)
        let verify_token = req.query["hub.verify_token"]

        if (verify_token == VERIFY_TOKEN){
          return res.send(req.query["hub.challenge"])
        }
        return res.send("Invalid verification token")
    }

    return res.send("This is a default response")
})

app.post("/", (req: Request, res: Response) => {
    console.log("Request Data: ", req.body)


    // Handle other notifications
    let data: NotificationPayload = req.body
    let ppayload = new ProcessPayload(data)

    if (ppayload.type == "messages"){
        let messages = ppayload.get_messages()

        for (const message of messages){
            if (message.type == "text"){
                console.log("Message Data: ", message)

                // Send Message Here
                // messenger.send_message("Yeah I saw it", message.from)
                //         .then(console.log)
                //         .catch(console.log)
             

            }
        }
    } 

    console.log("Payload Type: ", ppayload.type)
    console.log("Payload Data: ", ppayload.data.entry[0].changes[0].value)
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})