"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandelModel = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    currency: { type: String, required: true },
    finalDatetime: { type: Date, required: true },
    open: { type: Number, required: true },
    close: { type: Number, required: true },
    high: { type: Number, required: true },
    low: { type: Number, required: true },
    color: { type: Number, required: true },
});
exports.CandelModel = (0, mongoose_1.model)('Candle', schema);
//# sourceMappingURL=candleModel.js.map