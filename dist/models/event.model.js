"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typegoose_1 = require("@typegoose/typegoose");
let Event = class Event {
};
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Event.prototype, "location", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Event.prototype, "date", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Event.prototype, "hour", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Event.prototype, "cost", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Event.prototype, "quota", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Event.prototype, "email", void 0);
Event = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            versionKey: false,
            timestamps: true,
        },
    })
], Event);
const EventModel = (0, typegoose_1.getModelForClass)(Event);
exports.default = EventModel;
