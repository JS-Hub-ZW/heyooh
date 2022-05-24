

import { Request, Response } from 'express'
import ProcessPayload from '../classes/processPayload'
import { NotificationPayload } from "../types/event"


class NotificationController {

    static handleNotifications = (req: Request, res: Response) => {
        console.log("Request Data: ", req.body)
    
    
        // Handle other notifications
        let data: NotificationPayload = req.body
        let ppayload = new ProcessPayload(data)
    
        if (ppayload.type == "messages"){
            let messages = ppayload.get_messages()
    
            for (const message of messages){
                if (message.type == "text"){
                    console.log("Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "image"){
                    console.log("Image Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "sticker"){
                    console.log("Sticker Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "video"){
                    console.log("Video Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "audio"){
                    console.log("Audio Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "document"){
                    console.log("Document Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "location"){
                    console.log("Location Message Data: ", message)
                    return res.json(message)
                }

                else if (message.type == "contacts"){
                    console.log("Contacts Message Data: ", message)
                    return res.json(message)
                }
            }
        } 
    
        console.log("Payload Type: ", ppayload.type)
        console.log("Payload Data: ", ppayload.data.entry[0].changes[0].value)
    
        res.send("Thanks, notification recieved!")
        
    }




}

export default NotificationController