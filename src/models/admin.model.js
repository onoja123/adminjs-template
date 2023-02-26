"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RatesSchema = new mongoose_1.Schema({
    rates: {
        intraState: {
            bike: {
                baseFare: {
                    type: Number,
                    required: true,
                    default: 100,
                },
                perKm: {
                    type: Number,
                    required: true,
                    default: 40,
                },
                perMinute: {
                    type: Number,
                    required: true,
                    default: 15,
                },
                minimunFare: {
                    type: Number,
                    required: true,
                    default: 500,
                },
                perDestination: {
                    type: Number,
                    required: true,
                    default: 100,
                },
            },
            car: {
                baseFare: {
                    type: Number,
                    required: true,
                    default: 300,
                },
                perKm: {
                    type: Number,
                    required: true,
                    default: 60,
                },
                perMinute: {
                    type: Number,
                    required: true,
                    default: 20,
                },
                minimunFare: {
                    type: Number,
                    required: true,
                    default: 700,
                },
                perDestination: {
                    type: Number,
                    required: true,
                    default: 100,
                },
            },
            miniVan: {
                baseFare: {
                    type: Number,
                    required: true,
                    default: 400,
                },
                perKm: {
                    type: Number,
                    required: true,
                    default: 75,
                },
                perMinute: {
                    type: Number,
                    required: true,
                    default: 20,
                },
                minimunFare: {
                    type: Number,
                    required: true,
                    default: 800,
                },
                perDestination: {
                    type: Number,
                    required: true,
                    default: 100,
                },
            },
            van: {
                baseFare: {
                    type: Number,
                    required: true,
                    default: 600,
                },
                perKm: {
                    type: Number,
                    required: true,
                    default: 100,
                },
                perMinute: {
                    type: Number,
                    required: true,
                    default: 40,
                },
                minimunFare: {
                    type: Number,
                    required: true,
                    default: 1000,
                },
                perDestination: {
                    type: Number,
                    required: true,
                    default: 200,
                },
            },
            mediumTruck: {
                baseFare: {
                    type: Number,
                    required: true,
                    default: 1000,
                },
                perKm: {
                    type: Number,
                    required: true,
                    default: 200,
                },
                perMinute: {
                    type: Number,
                    required: true,
                    default: 60,
                },
                minimunFare: {
                    type: Number,
                    required: true,
                    default: 2000,
                },
                perDestination: {
                    type: Number,
                    required: true,
                    default: 500,
                },
            },
        },
    },
});
exports.default = (0, mongoose_1.model)("Cargo-Dealer-Admin", RatesSchema);
//# sourceMappingURL=admin.model.js.map