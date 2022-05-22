<samp>

# [heyooh](https://pypi.org/project/heyoo/)

[![Ported in Zimbabwe🇿🇼](https://img.shields.io/badge/ported%20in-zimbabwe%20%F0%9F%87%BF%F0%9F%87%BC-blue)](https://github.com/JS-Hub-ZW)
![NPM](https://img.shields.io/npm/l/heyooh)
![npm](https://img.shields.io/npm/v/heyooh)
[![Downloads](https://img.shields.io/npm/dy/heyhooh)](https://img.shields.io/npm/dw/heyooh)
[![Downloads](https://img.shields.io/npm/dw/heyhooh)](https://img.shields.io/npm/dw/heyooh)

Unofficial javascript wrapper to [WhatsApp Cloud API](https://developers.facebook.com/docs/whatsapp/cloud-api). Its the javascript port for [heyoo](https://github.com/Neurotech-HQ/heyoo)

## Features supported

1. Sending messages
2. Sending  Media (images, audio, video and ducuments)
3. Sending location
4. Sending interactive buttons
5. Sending template messages

## Getting started

To get started with **heyooh**, you have to firstly install the libary either directly or using *npm*.

### Installation directly

Use git to clone or you can also manually download the project repository just as shown below;

```bash
$ git clone https://github.com/JS-Hub-ZW/heyooh
$ cd heyooh
```

### Installing from npm

```bash
# For Windows, Linux & Mac

npm install heyooh
```

## Setting up

To get started using this package, you will need **TOKEN** and **TEST WHATSAPP NUMBER** which you can get by from [Facebook Developer Portal](https://developers.facebook.com/)

Here are steps to follow for you to get started

1. [Go to your apps](https://developers.facebook.com/apps)
2. [create an app](https://developers.facebook.com/apps/create/)
3. Select Bussiness >> Bussiness
4. It will prompt you to enter basic app informations
5. It will ask you to add products to your app
    a. Add WhatsApp Messenger
6. Right there you will see a your **TOKEN** and **TEST WHATSAPP NUMBER** and its phone_number_id
7. Lastly verify the number you will be using for testing on the **To** field.

Once you're follow the above procedures, now you're ready to start hacking with the Wrapper.

## Authentication

Here how you authenticate your application, you need to specofy two things the ```TOKEN``` and ```phone_number_id``` of your test number

```javascript
import WhatsApp from heyhooh
let messenger = new WhatsApp('TOKEN',  phone_number_id='104xxxxxx')
```

Once you have authenticated your app, now you can start using the above mentioned feature as shown above;

## Sending Messanges

Here how to send messages;

```javscript
messenger.send_message('Your message ', 'Mobile eg: 255757xxxxx')
```

### Example

Here an example

```javascript
messenger.send_message('Hi there just testiing', '255757902132')
```

## Sending Images

When sending media(image, video, audio, gif and document ), you can either specify a link containing  the media or specify object id, you can do this using the same method.

By default all media methods assume you're sending link containing media but you can change this by specifying the ```link=False```.

Here an example;

```javascript
messenger.send_image(
        image="https://i.imgur.com/Fh7XVYY.jpeg",
        recipient_id="255757xxxxxx",
)
```

## Sending Video

Here an example;

```javascript

messenger.send_video(
        video="https://www.youtube.com/watch?v=K4TOrB7at0Y",
        recipient_id="255757xxxxxx",
)
```

## Sending Audio

Here an example;

```javascript
messenger.send_audio(
        audio="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        recipient_id="255757xxxxxx",
)
```

## Sending Document

Here an example;

```javascript
messenger.send_document(
        document="http://www.africau.edu/images/default/sample.pdf",
        recipient_id="255757xxxxxx",
)
```

## Sending Location

Here an example;

```javascript
messenger.send_location(
        lat=1.29,
        long=103.85,
        name="Singapore",
        address="Singapore",
        recipient_id="255757xxxxxx",
    )
```

## Sending Interactive buttons

Here an example;

```javascript
messenger.send_button(
        recipient_id="255757xxxxxx",
        button={
            "header": "Header Testing",
            "body": "Body Testing",
            "footer": "Footer Testing",
            "action": {
                "button": "Button Testing",
                "sections": [
                    {
                        "title": "iBank",
                        "rows": [
                            {"id": "row 1", "title": "Send Money", "description": ""},
                            {
                                "id": "row 2",
                                "title": "Withdraw money",
                                "description": "",
                            },
                        ],
                    }
                ],
            },
        },
)
```

## Sending a Template Messages

Here how to send a pre-approved template message;

```javascript
messenger.send_template("hello_world", "255757xxxxxx")
```

## Webhook

**Note:** I am having issues with my phone number so I havent tested this functionality fully. Consider it experimental 🧪. If you decide proceeding, you might end up contributing (Which is a good thing)

Webhooks are useful incase you're wondering how to respond to incoming message send by user, but I have created a [starter webhook](https://github.com/JS-Hub-ZW/heyhooh/blob/main/hook.ts) which you can then customize it according to your own plans. In the moment I have made it as simple as possible.

To learn more about webhook and how to configure in your Facebook developer dashboard please [have a look here](https://developers.facebook.com/docs/whatsapp/cloud-api/guides/set-up-webhooks).


### Notification Payload Processor

Given notification data you can process it like this:

```javascript
let data = req.body
let processedPayload = new ProcessNotificationPayload(data)
```

This is will help you identify things like the type of payload and has some getter functions for simplifying your work:

```javascript
let messages = processedPayload.get_messages()
let metadata = processedPayload.get_contacts()
let contacts = processedPayload.get_contacts()
```

Of the helpers are not exhaustive since this is wrapper.

### Getting media links  [To be implented]

To retrive actual media links

```javascript
let message = processedPayload.get_messages()[0]
let mediaData = await  processedPayload.getMediaData(message.image.id)
```

**NOTE:** The URL you get is only available for a 5 minutes, so you may need to download it and store it somewhere, or use it as quick as possible

For more info check [Notification Payload refernce](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/components) and [Notification Payload Examples](https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks/payload-examples)

## Issues

If you will face any issue with the usage of this package please raise one so as we can quickly fix it as soon as possible;

## Contributing

This is an opensource project under ```MIT License``` so any one is welcome to contribute from typo, to source code to documentation, ```JUST FORK IT```.

## All the credit

1. [kalebu](https://github.com/Kalebu)
2. [takunda](https://github.com/takumade)
3. Contribute to get added here

</samp>
