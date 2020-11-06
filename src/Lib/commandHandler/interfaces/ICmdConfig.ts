export interface ICmdConfig {
    name: string;
    aliases: string[] | string;
    minArgs?: number;
    maxArgs?: number;
    expectedArgs: string;
    description: string;
    syntaxError?: string;
    requiredPermissions?: string[];
};