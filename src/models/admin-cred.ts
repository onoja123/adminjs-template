import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";
export interface IAdminCred extends Document {
  email: string;
  password: string;
}

const AdminCredSchema = new Schema<IAdminCred>({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

AdminCredSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
})

export default model<IAdminCred>("admin-cred", AdminCredSchema);
