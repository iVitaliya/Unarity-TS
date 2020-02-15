import {MessageEmbed, User} from "discord.js";
import {UnarityClient} from "./";

export class UnarityEmbed extends MessageEmbed {
    bot: UnarityClient;

    constructor(bot: UnarityClient) {
        super(...arguments);
        this.bot = bot;
    }

    base(user: User, msg?: string) {
        this
            .setAuthor(user!.username, user!.displayAvatarURL())
            .setTimestamp()
            .setColor("#0073ff");
        if (msg) this.setDescription(msg);
        return this;
    }

    error(user: User, err: string) {
        return this
            .base(user, err)
            .setTitle("Oh no! An error >:(")
            .setColor("#ff0000")
    }
};