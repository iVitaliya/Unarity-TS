import {Command} from "../../lib";
import {Message} from "discord.js";

export default class extends Command {
    constructor() {
        super("ping", {
            aliases: ["p"],
        });
    }

    async run(message: Message) {
        const msg = await message.sm(`🏓 Pinging....`);
        await msg.delete({timeout: 1000});
        message.sm(`🏓 Pong!
    Latency is ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
    API Latency is ${Math.round(this.bot!.ws.ping)}ms`);
    }
};