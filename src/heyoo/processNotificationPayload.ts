import { Message, NotificationPayload } from "../types/event";

class ProcessEvent{
    data: NotificationPayload
    type: string

    constructor(data:NotificationPayload){
        this.data = data 
        this.get_type()
    }

    get_value = () => this.data.entry[0].changes[0].value

    get_type(){
        let value_keys = Object.keys(this.get_value())

        if (value_keys.includes("messages")){
            this.type = "messages"
        }else if (value_keys.includes("status")){
            this.type = "statuses"
        }else if (value_keys.includes("contacts")){
            this.type = "contacts"
        }
    }

    getMediaLinks(id: string | number){
        // Use the media api to fetch image data 

    }

    process_message(m:any){
        // Detect if it has media

        return m
    }

    get_messages(){
        let raw_messages =  this.data.entry[0].changes[0].value.messages

        let messages:Message[] = raw_messages.map(m => {
            let processed_message = this.process_message(m)
            return processed_message
        })

        return messages
    }

    get_statuses(){
        return this.data.entry[0].changes[0].value?.statuses
    }

    get_contacts(){
        return this.data.entry[0].changes[0].value?.contacts
    }

    get_errors(){
        return this.data.entry[0].changes[0].value?.errors
    }

    get_metadata(){
        return this.data.entry[0].changes[0].value?.metadata
    }
}

export default ProcessEvent