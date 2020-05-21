// Packages...
import {Client} from 'discord.js';

// Files...
import {Logger} from '../Logs';

class UnarityClient extends Client {
    _token: string;

    constructor(_token: string) {
        super({
            messageCacheLifetime: 500,
            messageCacheMaxSize: 900,
            messageSweepInterval: 1000,
            partials: ['MESSAGE', 'REACTION']
        });

        this._token = process.env.DISCORD;
    }
}