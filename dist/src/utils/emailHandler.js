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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleIncomingEmail = void 0;
const analyzeEmail_1 = require("./analyzeEmail");
function handleIncomingEmail(emailContent) {
    return __awaiter(this, void 0, void 0, function* () {
        const classification = yield (0, analyzeEmail_1.analyzeEmailContent)(emailContent);
        console.log('Email classification:', classification);
        switch (classification) {
            case 'Interested':
                console.log('Handling interested case');
                break;
            case 'Not Interested':
                console.log('Handling not interested case');
                break;
            case 'More Information':
                console.log('Handling more information case');
                break;
            default:
                console.log('Unknown classification');
        }
    });
}
exports.handleIncomingEmail = handleIncomingEmail;
