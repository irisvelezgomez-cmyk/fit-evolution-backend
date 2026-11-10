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
exports.KnowledgeEntry = void 0;
const typeorm_1 = require("typeorm");
let KnowledgeEntry = class KnowledgeEntry {
    entryId;
    title;
    category;
    content;
    version;
    createdAt;
};
exports.KnowledgeEntry = KnowledgeEntry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], KnowledgeEntry.prototype, "entryId", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], KnowledgeEntry.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], KnowledgeEntry.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'jsonb' }),
    __metadata("design:type", Object)
], KnowledgeEntry.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'integer' }),
    __metadata("design:type", Number)
], KnowledgeEntry.prototype, "version", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], KnowledgeEntry.prototype, "createdAt", void 0);
exports.KnowledgeEntry = KnowledgeEntry = __decorate([
    (0, typeorm_1.Entity)('knowledge_entries')
], KnowledgeEntry);
//# sourceMappingURL=knowledge-entry.entity.js.map