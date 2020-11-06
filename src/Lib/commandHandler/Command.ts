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
    private _requiredPermissions?: string[] = [];
    private _requiredRoles?: Map<String, string[]> = new Map();
    private _disabled: string[] = [];

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
    }
};