export interface NotificationPayload {
    object:string
    entry: Entry[]
}

export interface Entry {
    id:string,
    changes: Change[]
}

export interface Change {
   value: Value
   field: string
}

export interface Value{
    messaging_product: string
    metadata: {
        display_phone_number: any;
        phone_number_id: any
    }
    contacts?: Contact[]
    errors?: any[]
    statuses?: Status[]
    messages?: Message[]
}

export interface Message {
    from: any
    id: string
    timestamp: any
    context?: {
        from: any; 
        id: string
    }
    button?: {
        text: string; 
        payload: string
    }
    text?:{
        body: string
    }
    image?: Image
    has_media?: boolean
    sticker?: Sticker
    document?: Document
    video?: Video
    audio?: Audio
    contacts?: ContactsData
    identity?: Identity
    location?: LocationData
    interactive?:Interactive
    referral: any // Handle this
    system: System 
    errors?: UnknownMessageError[]
    type?: string
}

export interface Interactive{
    type: {
        button_reply?: {
            id: string | number;
            title: string 
        };
        list_reply?: {
            id: string | number;
            title: string 
            description: string  
        }

    }
}

export interface System {
    body: string
    new_wa_id: string | number
    type: string
}

export interface Document{
    caption: string
    filename: string 
    sha256: string
    mime_type: string
    id: any
}

export interface Video{
    caption: string
    filename: string 
    sha256: string
    mime_type: string
    id: any
}

export interface Audio{
    mime_type: string
    id: any
}

export interface Document{
    mime_type: string
    id: any
}

export interface Identity {
    acknowledged: any
    created_timestamp: any
    hash: string
}

export interface Contact{
    wa_id: any,
    profile: {
        name:string
    }
}


export interface Image{
    caption: string 
    mime_type: string
    sha256: string
    id: string
}

export interface Sticker{
    mime_type: string
    sha256: string
    id: string
}


export interface ContactsMessage{
    from: any
    id: string
    timestamp: any
    contacts: ContactsData
    type: string
}

export interface ContactsData { 
    addresses: Address[],
    birthday: string,
    emails: Email[]
    name: Name
    org: Org
    phones: Phone[]
    urls: URLData[]
}

export interface Address{
    city: string
    country: string
    country_code: string
    state: string
    street: string
    type: string
    zip: string
}
export interface Email{
    email:string
    type: string
}

export interface Name{
    formatted_name: string
    first_name: string
    last_name: string
    middle_name: string
    suffix: string
    prefix: string
}

export interface Org{
    company: string
    department: string
    title: string
}

export interface Phone{
    phone: string
    wa_id: string
    type: string
}

export interface URLData {
    url: string
    type: string
}

export interface UnknownMessageError{
    code: number,
    details: string,
    title: string
}

export interface LocationData{
    latitude: any
    longitude: any
    name: string,
    address: string
}

export interface Status{
    id: string | number
    recipient_id: string
    status: string
    timestamp: number | string 
    conversation: {
        id: string |number;
        origin: {
            type: string;
        };
        expiration_timestamp: string
    }
    pricing: {
        category: string
        billable?: boolean
        pricing_model?: string | number
    }

}




