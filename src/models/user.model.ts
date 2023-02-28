import { Schema, model, Document } from "mongoose";
import { v4 } from "uuid";

export const vehicleTypes = ["bike", "car", "miniVan", "van", "mediumTruck"];

export interface IUser extends Document {
  firstname: string;
  lastname: string;
  uid: string;
  email: string;
  password: string;
  phoneNumber: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  isAllowedToRide: boolean;
  account: {
    type: string;
    isDealer: boolean;
  };
  country: {
    name: string;
    code: string;
  };
  isOnline: boolean;
  vehicle: string;
  isVerifed: boolean;
  kycStatus: string;
  createdAt: Date;
  isIdentityVerified: boolean;
  otpSendCount: number;
  otpInputCount: number;
  pauseOtpSend: boolean;
  pauseOtpSendUntil: Date;
  pauseOtpInput: boolean;
  pauseOtpInputUntil: Date;
  walletBalance: number;
  isDriverTypeSelected: boolean;

  pin: string;
  avatar: {
    url: string;
    publicId: string;
  };
  defaultAddress: {
    address: string;
    placeId: string;
    lat: number;
    lng: number;
  };
  key: string;
  location: {
    type: string;
    coordinates: number[];
  };
}

enum kycStatus {
  pending = "pending",
  approved = "approved",
  rejected = "rejected",
}

const User = new Schema<IUser>({
  avatar: new Schema({
    url: {
      type: String,
      default: "",
    },
    publicId: {
      type: String,
      default: "",
    },
  }),
  isOnline: {
    type: Boolean,
    default: true,
  },
  firstname: {
    type: String,
    default: "",
  },
  lastname: {
    type: String,
    default: "",
  },
  pin: {
    type: String,
    default: "",
  },
  isIdentityVerified: {
    type: Boolean,
    default: false,
  },
  uid: {
    type: String,
    required: true,
    default: v4(),
    unique: true,
  },
  country: new Schema({
    name: {
      type: String,
      default: "",
    },
    code: {
      type: String,
      default: "",
    },
  }),
  email: {
    type: String,
  },
  vehicle: {
    type: String,
    default: "",
    enum: vehicleTypes,
  },
  password: {},
  phoneNumber: {
    type: String,
    default: "",
  },
  walletBalance: {
    type: Number,
    default: 0,
  },
  isEmailVerified: {
    type: Boolean,
    default: false,
  },
  isPhoneVerified: {
    type: Boolean,
    default: false,
  },
  isVerifed: {
    type: Boolean,
    default: false,
  },
  account: new Schema({
    type: {
      type: String,
      default: "user",
    },
    isDealer: {
      type: Boolean,
      default: false,
    },
  }),

  kycStatus: {
    type: String,
    enum: Object.values(kycStatus),
    default: kycStatus.pending,
  },
  isDriverTypeSelected: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  otpSendCount: {
    type: Number,
    default: 0,
  },
  otpInputCount: {
    type: Number,
    default: 0,
  },
  pauseOtpSend: {
    type: Boolean,
    default: false,
  },
  pauseOtpSendUntil: {
    type: Date,
    default: null,
  },
  pauseOtpInput: {
    type: Boolean,
    default: false,
  },
  pauseOtpInputUntil: {
    type: Date,
    default: null,
  },
  isAllowedToRide: {
    type: Boolean,
    default: false,
  },
  defaultAddress: new Schema({
    address: {
      type: String,
      default: "",
    },
    placeId: {
      type: String,
      default: "",
    },
    lat: {
      type: Number,
      default: 0,
    },
    lng: {
      type: Number,
      default: 0,
    },
  }),

  key: {
    type: String,
    default: v4(),
  },
  location: {
    type: {
      type: String,
      default: "Point",
    },
    coordinates: {
      type: [Number],
      default: [],
    },
  },
});

User.index({ location: "2dsphere" });

export default model<IUser>("Users", User);
