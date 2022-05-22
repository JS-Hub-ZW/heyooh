import express, { Request, Response } from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import WhatsApp from './heyoo'


const app = express()
const port = 3000


// Middleware 
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

let messenger = new WhatsApp(process.env.TOKEN)
let VERIFY_TOKEN =  "30cca545-3838-48b2-80a7-9e43b1ae8ce4"


app.get('/', (req: Request, res:Response) => {
    if (req.method == "GET"){
        let hub:any = req.query.hub
        let verify_token = hub.verify_token

        if (verify_token == VERIFY_TOKEN)
          return hub.challenge
        res.send("Invalid verification token")
    }

    let data = req.body
    let changed_field = messenger.changed_field(data)

    if (changed_field == "messages"){
        let new_message = messenger.get_mobile(data)
        if (new_message){
            let mobile = messenger.get_mobile(data)
            let message_type = messenger.get_message_type(data)

            if (message_type == "text"){
                let message = messenger.get_message(data)
                let name = messenger.get_name(data)
                console.log(`{name} with this {mobile} number sent  ${message}`)
                messenger.send_message(`Hi ${mobile}, nice to connect with you`, mobile)

        }else if (message_type == "interactive"){
            let message_response = messenger.get_interactive_response(data)
            console.log(message_response)
        }
      }else{
          let delivery = messenger.get_delivery(data)
          if (delivery)
              console.log(`Message : ${delivery}`)
          else
              console.log("No new message")
      }
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})