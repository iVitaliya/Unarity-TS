import {Guild} from "../../models/Guild";

export class DBGuild {
    public id: string;
    protected _guild: any;

    constructor(id: string) {
        this.id = id;
        this._guild = false;
    }

    async _init() {
        this._guild = await Guild.findOne({id: this.id});
        if (!this._guild) {
            this._guild = new Guild({
                id: this.id,
                prefix: "!",
                logs: {
                    channel: "",
                    enabled: []
                },
                features: {
                    enabled: [],
                    disabled: [],
                    all: true
                }
            })
        }

        return this;
    }

    public get prefix() {
        return this._guild!.prefix;
    }

    public save() {
        return this._guild!.save();
    }
}
