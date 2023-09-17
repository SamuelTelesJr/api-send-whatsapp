import { create, Whatsapp, Message, SocketState } from "venom-bot"
import { parsePhoneNumber, isValidNumber } from "libphonenumber-js"

export type QRCode = {
    base64Qr: string,
    asciiQR?: string,
    attempts?: string,
    urlCode?: string,
}

class Sender {
    private client: Whatsapp;
    private connected: boolean;
    private qr: QRCode;

    get isConnected(): boolean {
        return this.connected;
    }

    get qrCode(): QRCode {
        return this.qr;
    }

    constructor(){
        this.initialize();
    }

    async sendText(to: string, body: string){

        if(!isValidNumber(to, "BR")){

            throw new Error("This number is not valid.");

        }

        let phoneNumber = parsePhoneNumber(to, "BR").format("E.164").replace("+", "") as string;

        phoneNumber = phoneNumber.includes('@c.us') ? phoneNumber : `${phoneNumber}@c.us`

        console.log("Phone number: "+phoneNumber);
        
        await this.client.sendText(phoneNumber, body)
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    }

    private initialize(){
        const qr = (base64Qr: string) => {
            this.qr = { base64Qr }
        }

        const status = (statusSession: string) => {

            this.connected = ['isLogged', 'qrReadSuccess', 'chatsAvailable'].includes(statusSession);
        }

        const start = (client: Whatsapp) => {
            this.client = client;

            client.onStateChange((state) => {
                this.connected = state === SocketState.CONNECTED;
            })

            console.log(this.client);

            // this.sendText("595976814735@c.us", "Olá isso é teste da minha API.");
        }

        create('send-message-report', qr, status)
        .then((client) => start(client))
        .catch((error) => console.error(error))
    }
}

export default Sender