
import express from 'express';
import app from '../src/hook'
import supertest from 'supertest'

describe("Test Message Notifications", () => {

    test("Responds to Text Message Notification", async () => {
        await  supertest(app)
                .post("/")
                .send({
                            "object": "whatsapp_business_account",
                            "entry": [{
                                "id": "101404072591160",
                                "changes": [{
                                    "value": {
                                        "messaging_product": "whatsapp",
                                        "metadata": {
                                            "display_phone_number": "26377851561",
                                            "phone_number_id": "101404072591160"
                                        },
                                        "contacts": [{
                                            "profile": {
                                              "name": "John Lee"
                                            },
                                            "wa_id": "101404072591160"
                                          }],
                                        "messages": [{
                                            "from": "10290191920",
                                            "id": "wamid.ID",
                                            "timestamp": "timestamp",
                                            "text": {
                                              "body": "Hello lets take some drinks"
                                            },
                                            "type": "text"
                                          }]
                                    },
                                    "field": "messages"
                                  }]
                            }]
                })
                .expect(200)
                .then(async (res: { body: { from: any; type: any; text: any; }; }) => {
                    expect(res.body.from).toEqual('10290191920')
                    expect(res.body.type).toEqual('text')
                    expect(res.body.text.body).toEqual('Hello lets take some drinks')
                    
                })
    })


    test("Responds to Image Message Notification", async () => {
        await  supertest(app)
                .post("/")
                .send({
                    "object": "whatsapp_business_account",
                    "entry": [{
                        "id": "101404072591160",
                        "changes": [{
                            "value": {
                                "messaging_product": "whatsapp",
                                "metadata": {
                                    "display_phone_number": "26377851561",
                                    "phone_number_id": "101404072591160"
                                },
                                "contacts": [{
                                    "profile": {
                                      "name": "John Lee"
                                    },
                                    "wa_id": "101404072591160"
                                  }],						
                                          "messages": [{
                                    "from": "10290191920",
                                    "id": "wamid.ID",
                                    "timestamp": "timestamp",
                                    "type": "image",
                                    "image": {
                                      "caption": "Cat in the fridge",
                                      "mime_type": "image/jpeg",
                                      "sha256": "IMAGE_HASH",
                                      "id": "ID"
                                    }
                                  }]
                            },
                            "field": "messages"
                          }]
                    }]
                  })
                .expect(200)
                .then(async (res: { body: { from: any; type: any; image: any; }; }) => {
                    expect(res.body.from).toEqual('10290191920')
                    expect(res.body.type).toEqual('image')
                    expect(res.body.image.caption).toEqual('Cat in the fridge')
                    
                })
    })

    test("Responds to Image Message Notification", async () => {
        await  supertest(app)
                .post("/")
                .send({
                    "object": "whatsapp_business_account",
                    "entry": [{
                        "id": "101404072591160",
                        "changes": [{
                            "value": {
                                "messaging_product": "whatsapp",
                                "metadata": {
                                    "display_phone_number": "26377851561",
                                    "phone_number_id": "101404072591160"
                                },
                                "contacts": [{
                                    "profile": {
                                      "name": "John Lee"
                                    },
                                    "wa_id": "101404072591160"
                                  }],						
                                          "messages": [{
                                    "from": "10290191920",
                                    "id": "wamid.ID",
                                    "timestamp": "timestamp",
                                    "type": "sticker",
                                    "sticker": {
										"mime_type": "image/webp",
										"sha256": "HASH",
										"id": "ID"
                	                }
                                  }]
                            },
                            "field": "messages"
                          }]
                    }]
                  })
                .expect(200)
                .then(async (res: { body: { from: any; type: any; sticker: any; }; }) => {
                    expect(res.body.from).toEqual('10290191920')
                    expect(res.body.type).toEqual('sticker')
                    expect(res.body.sticker.sha256).toEqual('HASH')
                    
                })
    })
    test("Responds to Location Message Notification", async () => {
        await  supertest(app)
                .post("/")
                .send({
                    "object": "whatsapp_business_account",
                    "entry": [{
                        "id": "101404072591160",
                        "changes": [{
                            "value": {
                                "messaging_product": "whatsapp",
                                "metadata": {
                                    "display_phone_number": "26377851561",
                                    "phone_number_id": "101404072591160"
                                },
                                "contacts": [{
                                    "profile": {
                                      "name": "John Lee"
                                    },
                                    "wa_id": "101404072591160"
                                  }],						
                                          "messages": [{
                                    "from": "10290191920",
                                    "id": "wamid.ID",
                                    "timestamp": "timestamp",
                                    "type": "image",
                                    "location": {
                                                              "latitude": 1.29,
                                                      "longitude":103.85,
                                                      "name":"Singapore",
                                                      "address":"Singapore"
                                                      }
                                  }]
                            },
                            "field": "messages"
                          }]
                    }]
                  })
                .expect(200)
                .then(async (res: { body: { from: any; type: any; location: any; }; }) => {
                    expect(res.body.from).toEqual('10290191920')
                    expect(res.body.type).toEqual('location')
                    expect(res.body.location.name).toEqual('Singapore')
                    expect(res.body.location.longitude).toEqual(103.85)
                    
                })
    })

    test("Responds to Contacts Message Notification", async () => {
        await  supertest(app)
                .post("/")
                .send({
                    "object": "whatsapp_business_account",
                    "entry": [{
                        "id": "101404072591160",
                        "changes": [{
                            "value": {
                                "messaging_product": "whatsapp",
                                "metadata": {
                                    "display_phone_number": "26377851561",
                                    "phone_number_id": "101404072591160"
                                },
                                "contacts": [{
                                    "profile": {
                                      "name": "John Lee"
                                    },
                                    "wa_id": "101404072591160"
                                  }],						
                                          "messages": [{
                                    "from": "10290191920",
                                    "id": "wamid.ID",
                                    "timestamp": "timestamp",
                                    "type": "image",
                                                "contacts":[{
                              "addresses":[{
                                "city":"CONTACT_CITY",
                                "country":"CONTACT_COUNTRY",
                                "country_code":"CONTACT_COUNTRY_CODE",
                                "state":"CONTACT_STATE",
                                "street":"CONTACT_STREET",
                                "type":"HOME or WORK",
                                "zip":"CONTACT_ZIP"
                              }],
                              "birthday":"CONTACT_BIRTHDAY",
                              "emails":[{
                                "email":"CONTACT_EMAIL",
                                "type":"WORK or HOME"
                                }],
                              "name":{
                                "formatted_name":"CONTACT_FORMATTED_NAME",
                                "first_name":"CONTACT_FIRST_NAME",
                                "last_name":"CONTACT_LAST_NAME",
                                "middle_name":"CONTACT_MIDDLE_NAME",
                                "suffix":"CONTACT_SUFFIX",
                                "prefix":"CONTACT_PREFIX"
                                },
                              "org":{
                                "company":"CONTACT_ORG_COMPANY",
                                "department":"CONTACT_ORG_DEPARTMENT",
                                "title":"CONTACT_ORG_TITLE"
                                },
                              "phones":[{
                                "phone":"CONTACT_PHONE",
                                "wa_id":"CONTACT_WA_ID",
                                "type":"HOME or WORK>"
                                }],
                              "urls":[{
                                "url":"CONTACT_URL",
                                "type":"HOME or WORK"
                                }]
                              }]
                            }]
                            },
                            "field": "messages"
                          }]
                    }]
                  })
                .expect(200)
                .then(async (res: { body: { from: any; type: any; contacts: any; }; }) => {
                    expect(res.body.from).toEqual('10290191920')
                    expect(res.body.type).toEqual('contacts')
                    expect(Object.keys(res.body.contacts[0]).includes("phones")).toBe(true)
                    expect(Object.keys(res.body.contacts[0]).includes("addresses")).toBe(true)
                    expect(Object.keys(res.body.contacts[0]).includes("urls")).toBe(true)
                    
                })
    })
})


