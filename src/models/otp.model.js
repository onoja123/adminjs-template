"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otpTypes = void 0;
const mongoose_1 = require("mongoose");
exports.otpTypes = [
    "signupEmail",
    "signupPhone",
    "forgotPassword",
    "verifyPhone",
    "verifyEmail",
    "globalSigninSignup",
];
const otpSchema = new mongoose_1.Schema({
    otp: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});
exports.default = (0, mongoose_1.model)("Otps", otpSchema);
//# sourceMappingURL=otp.model.js.map