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
exports.LogEntry = exports.LogType = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
var LogType;
(function (LogType) {
    LogType["WORKOUT"] = "WORKOUT";
    LogType["MEAL"] = "MEAL";
})(LogType || (exports.LogType = LogType = {}));
let LogEntry = class LogEntry {
    logEntryId;
    user;
    logType;
    entryDate;
    details;
    notes;
};
exports.LogEntry = LogEntry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], LogEntry.prototype, "logEntryId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.logEntries, { onDelete: 'CASCADE' }),
    __metadata("design:type", user_entity_1.User)
], LogEntry.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar' }),
    __metadata("design:type", String)
], LogEntry.prototype, "logType", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], LogEntry.prototype, "entryDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-json' }),
    __metadata("design:type", Object)
], LogEntry.prototype, "details", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], LogEntry.prototype, "notes", void 0);
exports.LogEntry = LogEntry = __decorate([
    (0, typeorm_1.Entity)('log_entries')
], LogEntry);
//# sourceMappingURL=log-entry.entity.js.map