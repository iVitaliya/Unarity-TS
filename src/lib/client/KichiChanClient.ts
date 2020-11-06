// Packages...
import {Client, Collection} from 'discord.js';

// Files...
import {} from '../index';

export class KichiChanClient extends Client {
    public requiredRoles: any;
    public db: any;
    public prefix: any;
    public blacklist_users: any;
    public ignored_channels: any;
    public blacklist_guilds: any;
    public disabled: any;
    
    constructor() {
        super({
            restTimeOffset: 850,
            messageCacheMaxSize: 500,
            messageCacheLifetime: 10100,
            messageSweepInterval: 10800,
            partials: ['MESSAGE', 'REACTION']
        });


    }
}; 