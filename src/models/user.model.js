"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uuid_1 = require("uuid");
// enum accountType {
//   admin = "admin",
//   user = "user",
//   business = "business",
// }
var kycStatus;
(function (kycStatus) {
    kycStatus["pending"] = "pending";
    kycStatus["approved"] = "approved";
    kycStatus["rejected"] = "rejected";
})(kycStatus || (kycStatus = {}));
const User = new mongoose_1.Schema({
    avatar: {
        type: Object,
        default: {
            url: "",
            publicId: "",
        },
    },
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
    uid: {
        type: String,
        required: true,
        default: (0, uuid_1.v4)(),
        unique: true,
    },
    country: {
        type: String,
        default: "",
    },
    email: {
        type: String,
    },
    vehicleType: {
        type: String,
        default: "",
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
    accountType: {
        type: Object,
        default: {
            type: "user",
            isDealer: false,
        },
    },
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
    defaultAddress: {
        type: Object,
        default: {
            address: "",
            placeId: "",
            lat: 0,
            lng: 0,
        },
    },
    key: {
        type: String,
        default: (0, uuid_1.v4)(),
    },
    location: {
        // type: Object,
        // default: {
        //   type: "Point",
        //   // coordinates: [0, 0],
        // },
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
exports.default = (0, mongoose_1.model)("Users", User);
//# sourceMappingURL=user.model.js.map