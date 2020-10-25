// Packages
import {Message, User, Member, Role, TextChannel, Channel, Guild} from 'eris';

// Files
import {PragmaClient} from '../index';

// Class
class PragmaFetcher {
    private client: PragmaClient;

    constructor(client: PragmaClient) {
        this.client = client;
    }

    // message(channel: TextChannel, value: any): Promise<Message | null> {
    //     if (channel instanceof TextChannel) return value
        
    //     const messageProcessor = channel.
    // }
};