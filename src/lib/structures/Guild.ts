import {searchQuery} from "../";
import {Message, Structures} from "discord.js";
import {DBGuild} from "../database/Guild";

// @ts-ignore
export = () => Structures.extend("Guild", Guild =>
    class UnarityGuild extends Guild {
        public database: any = false;

        async findMember(message: Message, query: string) {
            let target = message.mentions.members!.first();
            if (!target && message.mentions.users.first() && !message.mentions.members!.first())
                target = await this.members.fetch(message.mentions.users.first()!);

            if (!target)
                target = this.members.find((mem) => searchQuery(query, mem.user.username)) || this.members.get(query);
            return target;
        }


        get db() {
            if (this.database) return this.database;
            new DBGuild(this.id)._init().then((g) => {
                this.database = g;
                this.database.save();
            });
            return this.database;
        }
    }
)