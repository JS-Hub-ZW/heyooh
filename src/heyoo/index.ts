class WhatsApp{
    phone_number_id: string
    token: string
    headers: { "Content-Type": string; Authorization: string }
    url: string;

    constructor(token:string, phone_number_id: string){
        this.token = token 
        this.phone_number_id = phone_number_id
        this.url = `https://graph.facebook.com/v13.0/${phone_number_id}/messages`
        this.headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
        
    }

    send_message(
         message:string, recipient_id:string, recipient_type ="individual", preview_url =true
    ){
        let data = {
            "messaging_product": "whatsapp",
            "recipient_type": recipient_type,
            "to": recipient_id,
            "type": "text",
            "text": {"preview_url": preview_url, "body": message},
        }
        r = requests.post(f"{self.url}", headers=self.headers, json=data)
        return r.json()
    }
}