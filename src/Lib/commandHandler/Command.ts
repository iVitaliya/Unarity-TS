// Packages...
import {Message} from 'discord.js';
import moment from 'moment';

// Files...
import {KichiChanClient, ICmdConfig, KichiChanCommands} from '../index';

export class Command {
    private instance: KichiChanCommands;
    private client: KichiChanClient;
    private _name: string;
    private _aliases: string[] = [];
    private _minArgs: number;
    private _maxArgs: number;
    private _expectedArgs: string;
    private _description?: string;
    private _syntaxError?: string;
    private _requiredRoles?: any;

    constructor(
        instance: KichiChanCommands,
        client: KichiChanClient,
        {
            name,
            aliases,
            minArgs,
            maxArgs,
            expectedArgs,
            description,
            syntaxError,
            requiredPermissions
        }: ICmdConfig
    ) {
        this.instance = instance;
        this.client = client;
        this._name = name;
        this._aliases = typeof aliases === 'string' ? [aliases] : aliases;
        this._minArgs = minArgs || 0;
        this._maxArgs = maxArgs === undefined ? -1 : maxArgs;
        this._expectedArgs = expectedArgs;
        this._description = description;
        this._syntaxError = syntaxError;
        this._requiredPermissions = requiredPermissions;

        if (this._minArgs < 0) {
            throw new Error(
                `[Kichi~Chan | Commands] (${moment(Date.now()).format('dddd, hh:mm A')}): Command "${name}" has a minimum argument count less than 0!`
            );
        }

        if (this._maxArgs < -1) {
            throw new Error(
                `[Kichi~Chan | Commands] (${moment(Date.now()).format('dddd, hh:mm A')}): Command "${name}" has a maximum argument count less than -1!`
            );
        }

        if (this._maxArgs !== -1 && this._maxArgs < this._minArgs) {
            throw new Error(
                `[Kichi~Chan | Commands] (${moment(Date.now()).format('dddd, hh:mm A')}): Command "${name}" has a maximum argument count less than it's minimum argument count!`
            );
        }
    }

    public execute(message: Message, args: string[]): Promise<void | Message> {
        throw new Error(
            `[Kichi~Chan | Commands] (${moment(Date.now()).format('dddd, hh:mm A')}): Command "${name}" doesn't execute nor do anything!`
        );
    }

    public get name(): string {
        return this._name;
    }

    public get aliases(): string[] {
        return this._aliases;
    }

    public get minArgs(): number {
        return this._minArgs;
    }

    public get maxArgs(): number {
        return this._maxArgs;
    }

    public get expectedArgs(): string | undefined {
        return this._expectedArgs;
    }

    public get description(): string | undefined {
        return this._description;
    }

    public get syntaxError(): string | undefined {
        return this._syntaxError;
    }

    public get requiredPermissions(): string[] | undefined {
        return this._requiredPermissions;
    }

    public async addRequiredRole(guildID: string, cmd: string, roleID: string) {
        const array = await this.client.requiredRoles.get(guildID+'-required-roles-'+cmd, []);

        if (!array.includes(roleID)) {
            array.push(roleID);
            
            console.log(`[Kichi~Chan | Commands] (${moment(Date.now()).format('dddd, hh:mm A')}): Added ${roleID} to ${this._name} for guild ${guildID}!`);
        }
    }

    public async removeRequiredRole(guildID: string[], cmd: string, roleID: string) {
        if (roleID === 'none') {
            this.client.requiredRoles.set(guildID+'-required-roles-'+cmd, []);
            return;
        }

        const array = await this.client.requiredRoles.get(guildID+'-required-roles-'+cmd, []);
        const index = array ? array.indexOf(roleID) : -1;

        if (array && index >= 0) {
            array.splice(index, 1);

            console.log(`[Kichi~Chan | Commands] (${moment(Date.now()).format('dddd, hh:mm A')}): Removed ${roleID} from ${this._name} for guild ${guildID}!`);
        }
    }

    public async getRequiredRoles(guildID: string, cmd: string) {
        const a = await this.client.requiredRoles.get(guildID+'-required-roles-'+cmd, []);
        return a;
    }

    public disable(cmd: string) {
        if (!this.client.disabled.includes(cmd)) {
            this.client.disabled.push(cmd);
        }
    }

    public enable(cmd: string) {
        const index = this.client.disabled.indexOf(cmd);
        
        if (index >= 0) {
            this.client.disabled.splice(index, 1);
        }
    }

    public isDisabled(cmd: string) {
        return this.client.disabled.includes(cmd);
    }
};