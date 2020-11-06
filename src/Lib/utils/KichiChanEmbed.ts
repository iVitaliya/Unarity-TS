// Packages
import {Guild, GuildMember, MessageEmbed} from 'discord.js';

// Files
import {KichiChanClient} from '../index';

// Class of embeds.
export class KichiChanEmbed extends MessageEmbed {
    client: KichiChanClient;
    guild: Guild;
    member: GuildMember;
    title: string = '';
    description: string = '';
    colour: string = '';

    constructor(client: KichiChanClient, guild: Guild, member: GuildMember, title: string, description: string, colour: string) {
        super();

        this.client = client;
        this.guild = guild;
        this.member = member;
        
        if (this.colour === 'main') {
            const gName = guild.name.length > 15 ? guild.name.slice(0, 15)+'...' : guild.name;
            
            return this
                .setColor('cc0ffc')
                .setAuthor(`${gName} | ${title}`)
        } else if (this.colour === 'error') this.setColor('f22b35');
    }
};