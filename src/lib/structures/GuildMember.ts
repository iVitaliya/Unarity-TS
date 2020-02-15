import {Structures} from "discord.js";
import {DBMember} from "../database/Member";

export = () => Structures.extend("GuildMember", GuildMember =>
    class UnarityMember extends GuildMember {
        public database: any = false;

        get db() {
            if (this.database) return this.database;
            new DBMember(this.id, this.guild.id)._init().then((g) => {
                this.database = g;
                this.database.save();
            });
            return this.database;
        }
    }
)