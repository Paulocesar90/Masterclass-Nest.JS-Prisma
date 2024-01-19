export declare abstract class RocketMembersRepository {
    abstract create(name: string, memberFunction: string): Promise<void>;
}
