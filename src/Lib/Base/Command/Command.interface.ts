// Interface
interface CommandData {
    category: string;
    name: string;
    aliases?: string[] | string;
    usages: string[] | string;
    examples: string[] | string;
    description: string;

    clientPermissions?: string;
    userPermissions?: string;
    member: boolean;
    helper: boolean;
    moderator: boolean;
    admin: boolean;
    manager: boolean;
    owner: boolean;
    developer: boolean;

    nsfw: boolean;
    argsAmount: number;
    guarded: boolean; // If true then NO disable cmd.
    usableInDM: boolean;

    cooldown: number;
    limit: number;
};

// Exports
export {CommandData};