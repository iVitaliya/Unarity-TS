import {Member} from "../../models/member";

export class DBMember {
    public id: string;
    public guildId: string;
    protected _member: any;

    constructor(id: string, guildId: string) {
        this.id = id;
        this.guildId = guildId
        this._member = false;
    }

    async _init() {
        this._member = await Member.findOne({id: this.id, guildId: this.guildId});
        if (!this._member) {
            this._member = new Member({
                id: this.id,
                guildId: this.guildId,
                xp: 0,
                level: 0,
                mute: false,
                muteTime: 0
            })
        }

        return this;
    }

    get xp() {
        return this._member.xp;
    }

    save() {
        return this._member.save();
    }
}