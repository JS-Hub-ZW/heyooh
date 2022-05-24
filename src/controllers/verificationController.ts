
import { Request, Response } from 'express'

class VerificationController{

    static handleVerification = (req: Request, res:Response) => {
        console.log("Request Data: ", req.query)
    
        // Handle Verification
        if (req.query["hub.verify_token"]){
            let hub:any = req.query
            console.log("Hub: ", hub)
            let verify_token = req.query["hub.verify_token"]
    
            if (verify_token == process.env.VERIFY_TOKEN){
              return res.send(req.query["hub.challenge"])
            }
            return res.send("Invalid verification token")
        }
    
        return res.send("This is a default response")
    }
}

export default VerificationController