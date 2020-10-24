// Packages
import {Client} from 'eris';

// Files
import {Datifier, Logger, Utilities, Handler, Pages, Command} from '../index';

// Class
class PragmaClient extends Client {
    public datifier: typeof Datifier;
    public logger: typeof Logger;
    public utilities: typeof Utilities;
    public handler: Handler;
    public pages: typeof Pages;
    
    public economy: any;
    public database: any;
    public prefix: any;
    public language: any;

    public commands: Map<string, Command> = new Map();
    public aliases: Map<string, string> = new Map();
    public cooldown: Map<string, any> = new Map();
    public snipes: Map<string, any> = new Map();
    public ghostPings: Map<string, any> = new Map();

    constructor() {
        super(process.env.DISCORD ? process.env.DISCORD : "NzY5NjA5ODc2OTM3NjM3OTE4.X5RhDQ.7cwfgldxRy1Drj8XZm4B2qP_PDc", {
            autoreconnect: true,
            messageLimit: 500,
            defaultImageFormat: 'png',
            defaultImageSize: 512,
            reconnectAttempts: 3,
        });

        this.datifier = Datifier;
        this.logger = Logger;

        this.utilities = Utilities;
        this.handler = new Handler();
        this.pages = Pages;
    }

    async start() {
        await this.handler.commands.load('../../Commands');

        super.connect();
    }
}; 

// Exports
export {PragmaClient};