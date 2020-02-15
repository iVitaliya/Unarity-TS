import {Event, UnarityClient} from "../../lib";
import {Message} from "discord.js";

export default class extends Event {
    constructor() {
        super("message-receive")
    }

    run(bot: UnarityClient, message: Message) {
        if (message.author.bot) return;

        if (!message.content.startsWith(message.guild!.db.prefix)) return;
        const [cmd, ...args] = message.content.trim().slice(1).split(" ");
        const command = bot.handler.getCommand(cmd);
        if (command) {
            if (!bot.handler.checkPerms(message.member!, command.userPermissions))
                return message.sm(`You don't have the required Permissions! Needed: ${(command.userPermissions as string[]).join(" or ")}`);
            if (!bot.handler.checkPerms(message.guild!.me!, command.botPermissions))
                return message.sm(`I don't have the required Permissions! Needed: ${(command.botPermissions as string[]).join(" and ")}`);
            command.run(message, args)
        }
    }
};