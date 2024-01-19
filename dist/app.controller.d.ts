import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { RocketMembersRepository } from './repositories/rocket-members-repository';
export declare class AppController {
    private rocketMembersRepository;
    constructor(rocketMembersRepository: RocketMembersRepository);
    getHello(body: CreateTeamMemberBody): Promise<void>;
}
