"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tripStatus = exports.tripTypes = void 0;
const mongoose_1 = require("mongoose");
// export const tripTypes = ["pickup", "dropoff"];
exports.tripTypes = ["intraState"];
exports.tripStatus = ["pending", "accepted", "completed", "cancelled"];
const tripSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
    },
    sender: {
        fullName: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        id: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Users",
        },
    },
    receiver: {
        fullName: {
            type: String,
        },
        phoneNumber: {
            type: String,
        },
        email: {
            type: String,
        },
        id: {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Users",
        },
    },
    pickupLocation: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
        address: {
            type: String,
        },
        placeId: {
            type: String,
        },
    },
    dropoffLocation: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        },
        address: {
            type: String,
        },
        placeId: {
            type: String,
        },
    },
    categories: {
        type: [String],
    },
    vehicleType: {
        type: String,
    },
    tripType: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: "draft",
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    dropoffCode: {
        type: Object,
        // required: true,
    },
    pickupCode: {
        type: Object,
        // required: true,
    },
    charge: {
        type: Number,
        // required: true,
    },
    completedAt: {
        type: Date,
    },
    driver: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        default: null,
    },
});
exports.default = (0, mongoose_1.model)("Trips", tripSchema);
//# sourceMappingURL=trip.model.js.map