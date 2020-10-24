// Packages...
import {Client, Collection} from 'discord.js';

// Files...
import {} from '../index';

class VixenClient extends Client {
    public db: any;
    public prefix: any;
    
    
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