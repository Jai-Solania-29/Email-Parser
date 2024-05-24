"use strict";
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
exports.getAccessToken = exports.generateAuthUrl = exports.pca = void 0;
const msal_node_1 = require("@azure/msal-node");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    auth: {
        clientId: process.env.OUTLOOK_CLIENT_ID,
        authority: process.env.OUTLOOK_AUTHORITY_URL,
        clientSecret: process.env.OUTLOOK_CLIENT_SECRET,
    },
};
exports.pca = new msal_node_1.PublicClientApplication(config);
function generateAuthUrl() {
    return exports.pca.getAuthCodeUrl({
        scopes: ['https://graph.microsoft.com/Mail.Read', 'https://graph.microsoft.com/Mail.Send'],
        redirectUri: process.env.OUTLOOK_REDIRECT_URL,
    });
}
exports.generateAuthUrl = generateAuthUrl;
function getAccessToken(code) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield exports.pca.acquireTokenByCode({
            code,
            scopes: ['https://graph.microsoft.com/Mail.Read', 'https://graph.microsoft.com/Mail.Send'],
            redirectUri: process.env.OUTLOOK_REDIRECT_URL,
        });
        return response.accessToken;
    });
}
exports.getAccessToken = getAccessToken;
