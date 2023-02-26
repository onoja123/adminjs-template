"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const deposit = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    depositDetails: {
        transactionId: {
            type: String,
            required: true,
        },
        transactionStatus: {
            type: String,
            required: true,
        },
        transactionAmount: {
            type: Number,
            required: true,
        },
        transactionDate: {
            type: Date,
            required: true,
        },
        transactionType: {
            type: String,
            required: true,
        },
        transactionCurrency: {
            type: String,
            required: true,
        },
        transactionFee: {
            type: Number,
            required: true,
        },
        transactionRef: {
            type: String,
            required: true,
        },
        transactionRefId: {
            type: String,
            required: true,
        },
        transactionRefUrl: {
            type: String,
            required: true,
        },
        transactionRefMethod: {
            type: String,
            required: true,
        },
        transactionMethod: {
            type: String,
            required: true,
        },
    },
});
exports.default = (0, mongoose_1.model)("Deposit", deposit);
//# sourceMappingURL=deposit.model.js.map