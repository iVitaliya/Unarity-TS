// Packages
import {Message} from 'eris';

// Files
import {PragmaClient, CommandData} from '../../index';

// Class
class Command implements CommandData {
    readonly client: PragmaClient;

    readonly category!: string;
    readonly name!: string;
    readonly aliases?: string[] | string;
    readonly usages!: string[] | string;
    readonly examples!: string[] | string;
    readonly description!: string;

    readonly clientPermissions?: string;
    readonly userPermissions?: string;

    readonly member!: boolean;
    readonly helper!: boolean;
    readonly moderator!: boolean;
    readonly admin!: boolean;
    readonly manager!: boolean;
    readonly owner!: boolean;
    readonly developer!: boolean;

    readonly nsfw!: boolean;
    readonly argsAmount!: number;
    readonly guarded!: boolean;
    readonly usableInDM!: boolean;

    readonly cooldown!: number;
    readonly limit!: number;
    
    constructor(client: PragmaClient, data: CommandData) {
        this.client = client;

        this.category = data.category;
        this.name = data.name;
        this.aliases = data.aliases;
        this.usages = data.usages;
        this.examples = data.examples;
        this.description = data.description;

        this.clientPermissions = data.clientPermissions;
        this.userPermissions = data.userPermissions;

        this.member = data.member;
        this.helper = data.helper;
        this.moderator = data.moderator;
        this.admin = data.admin;
        this.manager = data.manager;
        this.owner = data.owner;
        this.developer = data.developer;

        this.nsfw = data.nsfw;
        this.argsAmount = data.argsAmount;
        this.guarded = data.guarded;
        this.usableInDM = data.usableInDM;

        this.cooldown = data.cooldown;
        this.limit = data.limit;
    }

    callback(message: Message, args: string[]): Promise<void | Message> {
        throw Error(`${this.name} doesn't return anything!`);
    }
};

// Exports
export {Command};