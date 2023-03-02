import { Schema, model, Document } from "mongoose";

export interface IChat extends Document {
    members: Array<{

    }>
}


const chatSchema = new Schema<IChat>(

    {
        members: {
            
        }
    },
    {
        timestamps: true
    }
)
export default model<IChat>("Chat", chatSchema)
