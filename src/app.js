"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminjs_1 = __importDefault(require("adminjs"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_model_1 = __importDefault(require("./models/admin.model"));
const deposit_model_1 = __importDefault(require("./models/deposit.model"));
const firebase_model_1 = __importDefault(require("./models/firebase.model"));
const otp_model_1 = __importDefault(require("./models/otp.model"));
const trip_model_1 = __importDefault(require("./models/trip.model"));
const user_model_1 = __importDefault(require("./models/user.model"));
const vehicle_model_1 = __importDefault(require("./models/vehicle.model"));
const verifications_model_1 = __importDefault(require("./models/verifications.model"));
const AdminJSMongoose = __importStar(require("@adminjs/mongoose"));
const express_1 = __importDefault(require("@adminjs/express"));
const express = require('express');
adminjs_1.default.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
});
mongoose_1.default.set('strictQuery', false);
const PORT = 3000;
const DEFAULT_ADMIN = {
    email: 'admin@example.com',
    password: 'password',
};
const authenticate = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
        return Promise.resolve(DEFAULT_ADMIN);
    }
    return null;
});
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express();
    yield mongoose_1.default.connect("mongodb+srv://cargo-dealer-dev-db:d9UPIDW5lsU9jDXC@cluster0.lasta5u.mongodb.net/CARGO-DEALER-DEV-DB?retryWrites=true&w=majority");
    const adminOptions = {
        resources: [admin_model_1.default, deposit_model_1.default, firebase_model_1.default, otp_model_1.default, trip_model_1.default, user_model_1.default, vehicle_model_1.default, verifications_model_1.default]
    };
    const admin = new adminjs_1.default(adminOptions);
    const adminRouter = express_1.default.buildAuthenticatedRouter(admin, {
        authenticate,
        cookieName: "AdminJS",
        cookiePassword: "Secret",
    }, null, {
        resave: true,
        saveUninitialized: true,
        secret: 'Secret',
        name: 'adminjs',
    });
    app.use(admin.options.rootPath, adminRouter);
    app.listen(PORT, () => {
        console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
    });
});
start();
exports.default = start;
//# sourceMappingURL=app.js.map