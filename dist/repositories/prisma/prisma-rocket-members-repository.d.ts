import { PrismaService } from "src/database/prisma.service";
import { RocketMembersRepository } from "../rocket-members-repository";
export declare class PrismaRocketMembersRepository implements RocketMembersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(name: string, memberFunction: string): Promise<void>;
}
