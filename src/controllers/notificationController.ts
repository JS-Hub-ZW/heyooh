

import { Request, Response } from 'express'
import ProcessPayload from '../heyoo/processNotificationPayload'
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
    
                    // Send Message Here
                    // messenger.send_message("Yeah I saw it", message.from)
                    //         .then(console.log)
                    //         .catch(console.log)
                 
    
                }
            }
        } 
    
        console.log("Payload Type: ", ppayload.type)
        console.log("Payload Data: ", ppayload.data.entry[0].changes[0].value)
    
        res.send("Thanks, notification recieved!")
        
    }




}

export default NotificationController