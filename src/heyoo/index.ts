import axios from "axios";

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

    async send_message(
         message:string, recipient_id:string, recipient_type ="individual", preview_url =true
    ){
        let data = {
            "messaging_product": "whatsapp",
            "recipient_type": recipient_type,
            "to": recipient_id,
            "type": "text",
            "text": {"preview_url": preview_url, "body": message},
        }


        let r = await axios.post(this.url, data, {
            headers: this.headers
        })

        return r 
    }

    async send_template(template:any, recipient_id: string, lang:string ="en_US"){
        let data = {
            "messaging_product": "whatsapp",
            "to": recipient_id,
            "type": "template",
            "template": {"name": template, "language": {"code": lang}},
        }
        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r
    }

    async send_location(lat: any, long: any, name: any, address: any, recipient_id: any){
        let data = {
            "messaging_product": "whatsapp",
            "to": recipient_id,
            "type": "location",
            "location": {
                "latitude": lat,
                "longitude": long,
                "name": name,
                "address": address,
            },
        }
        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r
    }

    async send_image(
        image: any,
        recipient_id: any,
        recipient_type="individual",
        caption=null,
        link=true,
    ){

        let data
        if (link){
            data = {
                "messaging_product": "whatsapp",
                "recipient_type": recipient_type,
                "to": recipient_id,
                "type": "image",
                "image": {"link": image, "caption": caption},
            }

        }else{
            data = {
                "messaging_product": "whatsapp",
                "recipient_type": recipient_type,
                "to": recipient_id,
                "type": "image",
                "image": {"id": image, "caption": caption},
            }
        }

        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r
    }

    async send_audio(self: any, audio: any, recipient_id: any, link=true){
        let data    
        if (link){
            data = {
                "messaging_product": "whatsapp",
                "to": recipient_id,
                "type": "audio",
                "audio": {"link": audio},
            }
        }else{
            data = {
                "messaging_product": "whatsapp",
                "to": recipient_id,
                "type": "audio",
                "audio": {"id": audio},
            }
        }

        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r
    }

    async send_video( video: any, recipient_id: any, caption=null, link=true){
        let data
        if (link){
            data = {
                "messaging_product": "whatsapp",
                "to": recipient_id,
                "type": "video",
                "video": {"link": video, "caption": caption},
            }
        }else{
            data = {
                "messaging_product": "whatsapp",
                "to": recipient_id,
                "type": "video",
                "video": {"id": video, "caption": caption},
            }
        }
        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r
    }

    async send_document(document: any, recipient_id: any, caption=null, link=true){
        let data
        if (link){
            data = {
                "messaging_product": "whatsapp",
                "to": recipient_id,
                "type": "document",
                "document": {"link": document, "caption": caption},
            }
        }else{
            data = {
                "messaging_product": "whatsapp",
                "to": recipient_id,
                "type": "document",
                "document": {"id": document, "caption": caption},
            }
        }

        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r
    }

    create_button(button: { get: (arg0: string) => any; }){
        // TODO: Investigate
        return {
            "type": "list",
            "header": {"type": "text", "text": button.get("header")},
            "body": {"text": button.get("body")},
            "footer": {"text": button.get("footer")},
            "action": button.get("action"),
        }
    }

    async send_button(button: any, recipient_id: any){
        let data = {
            "messaging_product": "whatsapp",
            "to": recipient_id,
            "type": "interactive",
            "interactive": this.create_button(button),
        }
        let  r = await axios.post(this.url, data, {
             headers: this.headers
        })
        return r 
    }

    preprocess(data:any){
        return data["entry"][0]["changes"][0]["value"]
    }

    get_mobile(data:any){
        data = this.preprocess(data)
        if (data.includes("contacts"))
            return data["contacts"][0]["wa_id"]
    }

    get_name(data:any){
        let contact = this.preprocess(data)
        if (contact)
            return contact["contacts"][0]["profile"]["name"]
    }

    get_message(data:any){
        data = this.preprocess(data)
        if (data.includes("messages"))
            return data["messages"][0]["text"]["body"]
    }

    get_message_id(data:any){
        data = this.preprocess(data)
        if (data.includes("messages"))
            return data["messages"][0]["id"]
    }

    get_message_timestamp(data:any){
        data = this.preprocess(data)
        if (data.includes("messages"))
            return data["messages"][0]["timestamp"]
    }

    get_interactive_response(data:any){
        data = this.preprocess(data)
        if (data.includes("messages"))
            return data["messages"][0]["interactive"]["list_reply"]
    }

    get_message_type(data:any){
        data = this.preprocess(data)
        if (data.includes("messages"))
            return data["messages"][0]["type"]
    }

    get_delivery(data:any){
        data = this.preprocess(data)
        if (data.includes("statuses"))
            return data["statuses"][0]["status"]
    }

    changed_field(data:any){
        return data["entry"][0]["changes"][0]["field"]
    }

}