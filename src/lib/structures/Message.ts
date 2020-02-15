import {Message, Structures} from "discord.js";
import {UnarityEmbed} from "../";

export = () => Structures.extend("Message", msg =>
    class UnarityMessage extends msg {

        public sm(msg: string, {reply, type} = {type: "base", reply: false}): Promise<Message> {
            if (!["base", "error"].includes(type)) type = "base";
            return reply ? this.reply(
                // @ts-ignore
                new UnarityEmbed(this.client!)[type](this.author, msg)
                ) :
                this.channel.send(
                    // @ts-ignore
                    new UnarityEmbed(this.client!)[type](this.author, msg)
                )
        }

        public embed(type = "base"): UnarityEmbed {
            // @ts-ignore
            return new UnarityEmbed(this.client!)[type](this.author);
        }

        public findMember(query: string): void {
            this.guild!.findMember(this, query);
        }
    })
