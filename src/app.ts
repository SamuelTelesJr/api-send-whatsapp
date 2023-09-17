import Sender from "./sender";
import express, { Request, Response } from "express"

const sender = new Sender();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.get('/status', (req: Request, resp: Response) => {
    return resp.send({
        qr_code: sender.qrCode,
        connected: sender.isConnected,
    })
});

app.post('/send', async (req: Request, resp: Response) => {

    const { number, message } = req.body;

    try {
        await sender.sendText(number, message);
        return resp.status(200).json();
    }
    catch (error){
        console.log(error);
        resp.status(500).json({status: "error", message: error});
    }
});

app.listen(5000, () => {
    console.log("⚡ server started");
});