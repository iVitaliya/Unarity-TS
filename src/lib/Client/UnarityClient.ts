import {Client, Collection} from "discord.js";
import {Handler} from "./Handler";
import {ICommand, UnarityEmbed} from "../";

declare module "discord.js" {

    interface Message {
        client: UnarityClient;

        sm(msg: string, options?: { type?: string, reply?: boolean }): Promise<Message>

        embed(): UnarityEmbed;
    }

    interface Guild {
        db: any;

        findMember(message: Message, query: string): Promise<GuildMember | undefined>;
    }
}

export class UnarityClient extends Client {
    commands: Collection<string, ICommand>;
    handler: Handler;

    constructor(token: string) {
        super(...arguments);
        super.login(token);

        this.commands = new Collection();
        this.handler = new Handler(this);
        this.handler.loadCommands(__dirname + "/../../commands");
        this.handler.loadEvents(__dirname + "/../../events");
    }
}
