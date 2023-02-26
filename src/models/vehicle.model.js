"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const vehicle = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    maker: {
        type: String,
    },
    model: {
        type: String,
    },
    year: {
        type: Number,
    },
    color: {
        type: String,
    },
    plateNumber: {
        type: String,
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isApproved: {
        type: Boolean,
        default: false,
    },
    images: {
        type: mongoose_1.Schema.Types.Array,
    },
    isCoperateOwned: {
        type: Boolean,
        default: false,
    },
    asignedTo: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
    },
});
exports.default = (0, mongoose_1.model)("Vehicles", vehicle);
//# sourceMappingURL=vehicle.model.js.map