import { Schema, model, Document } from "mongoose";

export interface IMessage extends Document{
    chatId: string;
    senderId: string;
    text: string;  
}

const messageSchema = new Schema<IMessage>({
    chatId: {
        type: String
    },
    senderId: {
        type: String
    },
    text: {
        type: String
    }
});

export default model<IMessage>("Message", messageSchema)