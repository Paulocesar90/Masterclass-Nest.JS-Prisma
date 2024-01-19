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
exports.PrismaRocketMembersRepository = void 0;
const node_crypto_1 = require("node:crypto");
const prisma_service_1 = require("../../database/prisma.service");
const common_1 = require("@nestjs/common");
let PrismaRocketMembersRepository = class PrismaRocketMembersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(name, memberFunction) {
        await this.prisma.rocketTeamMember.create({
            data: {
                id: (0, node_crypto_1.randomUUID)(),
                name,
                function: memberFunction,
            },
        });
    }
};
exports.PrismaRocketMembersRepository = PrismaRocketMembersRepository;
exports.PrismaRocketMembersRepository = PrismaRocketMembersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PrismaRocketMembersRepository);
//# sourceMappingURL=prisma-rocket-members-repository.js.map