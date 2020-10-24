// Packages
import {Client, Collection} from 'eris';

// Files
import {Datifier, Logger, Utilities} from '../index';

// Class
class PragmaClient extends Client {
    public datifier: typeof Datifier;
    public logger: typeof Logger;
    
    public db: any;
    public prefix: any;

    public commands: Map<string, Command> = new Map();
    
    constructor() {
        super(process.env.DISCORD ? process.env.DISCORD : "NzY5NjA5ODc2OTM3NjM3OTE4.X5RhDQ.7cwfgldxRy1Drj8XZm4B2qP_PDc", {
            autoreconnect: true,
            messageLimit: 500,
            defaultImageFormat: 'png',
            defaultImageSize: 512,
            reconnectAttempts: 3,
        });


    }
}; 

// Exports
export {PragmaClient};