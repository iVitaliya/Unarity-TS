// Packages...
import {Message} from 'discord.js';

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
        
    }
};