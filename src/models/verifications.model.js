"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const verification = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    vehicleDetails: {
        vehicleType: {
            type: String,
            required: true
        },
        vehicleNumber: {
            type: String,
            required: true
        },
        vehicleColor: {
            type: String,
            required: true
        }
    },
    driversImage: {
        type: String,
        required: true
    },
    driverLicense: {
        licenseNumber: {
            type: String,
            required: true
        },
        licenseExpiry: {
            type: Date,
            required: true
        },
        licenseImage: {
            type: String,
            required: true
        }
    },
    documents: {
        documentName: {
            type: String,
            required: true
        },
        documentImage: {
            type: String,
            required: true
        }
    },
    status: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});
exports.default = (0, mongoose_1.model)("Verification", verification);
//# sourceMappingURL=verifications.model.js.map