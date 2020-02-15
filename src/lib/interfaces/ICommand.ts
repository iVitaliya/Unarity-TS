import {BitFieldResolvable, Message, PermissionString} from "discord.js";
import {UnarityClient} from "..";
import {ICommandOptions} from "../base/Command";

export interface ICommand {
    category: string;
    name: string;
    options: ICommandOptions;
    botPermissions: BitFieldResolvable<PermissionString>;
    userPermissions: BitFieldResolvable<PermissionString>;
    bot: UnarityClient;

    run(message: Message, args: string[]): any;
}