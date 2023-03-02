import { Schema, model, Document } from "mongoose";
import bcrypt from "bcryptjs";
import * as crypto from 'crypto';

export interface IUser extends Document{
    name: string;
    email: string;
    Gender: Enumerator;
    dating: Enumerator;
    dob: Date;
    password: string;
    cloudindaryId: string;
    likes:  Array<{

    }>,
    likedMe:Array<{

    }>,
    matches:Array<{

    }>,
    bio: string;
    stat: Enumerator;
    height: Number;
    haircolor: string;
    occupation: string;
    interests: string;
    kids: Number;
    passwordConfirm: string;
    avatar: string;
    profileSet: boolean;
    isActive: boolean;
    createdAt: Date;
    passwordResetToken: String,
    passwordExpireToken: Date,
    passswordChangedAt: Date,
    verifyEmailToken: string,

}

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: [true, "please put in an email"],
            trim: true,
            unique: true,
            match: [
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              "Please enter a valid Email address",
            ],
        },
        Gender: {
            type: String,
            enum: ['male', 'female']
        },
        dating: {
            type: String,
            enum: ["man", "woman", "all"],
            
        },
        dob: {
            type: Date
        },
        likes:[],
        likedMe: [],
        matches: [],
        bio: {
            type: String
        },
        stat: {
            type: String,
            enum: ["Single", "Married", "Relationship"],
            
        },
        height: {
            type: Number
        },
        haircolor: {
            type: String
        },
        occupation :{
            type: String
        },
        interests: {
            type: String
        },
        kids: {
            type: Number
        },
        password: {
            type: String,
            required: true,
            select: false
        },
        passwordConfirm:{
            type: String,
        },
        avatar: {
            type: String,
            default: " "
        },
        cloudindaryId: {
            type: String
        },
        profileSet:{
            type: Boolean,
            required: true,
            default: false
        },
        isActive: {
            type: Boolean,
            required: true,
            default: false,
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        passwordResetToken: String,
        passwordExpireToken: Date,
        passswordChangedAt: Date,
        verifyEmailToken: {
            type: String,
            select: false,
        }
    },
    {
        timestamps: true
    }
)

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  });
  
// userSchema.pre('save', function(next) {
//     if (!this.isModified('password') || this.isNew) return next();
  
//     this.passwordChangedAt = Date.now() - 1000;
//     next();
// });


userSchema.methods.correctPassword = async function(
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
};
  
// userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
//     if (this.passwordChangedAt) {
//       const changedTimestamp = parseInt(
//         this.passwordChangedAt.getTime() / 1000,
//         10
//       );
  
//       return JWTTimestamp < changedTimestamp;
// }
  
//     // False means NOT changed
//     return false;
// };

userSchema.methods.createPasswordResetToken =  function(){
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.passwordResetToken = crypto.createHash('sha256').update(resetToken).digest("hex");

    this.passwordExpireToken = Date.now() + 10 * 60 * 1000;

    return resetToken;
};



userSchema.methods.getVerifyEmailToken = function () {
const resetToken = crypto.randomBytes(20).toString('hex');

this.verifyEmailToken = crypto.createHash('sha256').update(resetToken).digest('hex');

	return resetToken;
    
}



export default model<IUser>("User", userSchema)
