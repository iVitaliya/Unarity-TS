import {Message} from "discord.js";
import {UnarityClient} from "..";

export class Command {
    public bot?: UnarityClient;
    public name: string;
    public botPermissions?: string[];
    public userPermissions?: string[];
    public options?: ICommandOptions;

    constructor(name: string, options?: ICommandOptions) {
        this.name = name;

        if (options) {
            if (options.userPermissions) this.userPermissions = options.userPermissions;
            if (options.botPermissions) this.botPermissions = options.botPermissions;
            this.options = options! || {
                aliases: [],
                cooldown: 0,
                description: "Not Provided",
                usage: "Not Provided"
            };
        }
    }

    run(message: Message, args: string[]): any {
        message.sm("Command not ready!");
    }
}

export interface ICommandOptions {
    userPermissions?: string[];
    botPermissions?: string[];
    aliases?: string[];
    cooldown?: number;
    description?: string;
    usage?: string
}