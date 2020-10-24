// Packages
import {Guild, GuildMember, MessageEmbed} from 'discord.js';

// Class of embeds.
class KichiChanEmbed extends MessageEmbed {
    private client;
    private guild: Guild;
    private member: GuildMember;
    private title: string = '';
    private description: string = '';
    private colour: string = '';

    constructor(client, guild: Guild, member: GuildMember, title: string, description: string, colour: string) {
        super();
        
        if (this.colour === 'main') {
            const gName = guild.name.length > 15 ? guild.name.slice(0, 15)+'...' : guild.name;
            
            return this
                .setColor('cc0ffc')
                .setAuthor(`${gName} | ${title}`)
        } else if (this.colour === 'error') this.setColor('f22b35');
    }
};