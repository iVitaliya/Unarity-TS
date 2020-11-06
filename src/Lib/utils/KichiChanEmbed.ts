// Packages
import {Guild, GuildMember, MessageEmbed} from 'discord.js';
import moment from 'moment';

// Files
import {KichiChanClient} from '../index';

// Class of embeds.
export class KichiChanEmbed extends MessageEmbed {
    client: KichiChanClient;
    guild: Guild;
    member: GuildMember;
    gn: string;
    aun: string;
    title: string;
    description: string;
    colour: string;

    constructor(client: KichiChanClient, guild: Guild, member: GuildMember, title: string, description: string, colour: string) {
        super();

        this.client = client;
        this.guild = guild;
        this.member = member;
        this.title = title;
        this.description = description;
        this.colour = colour;
        this.gn = guild.name.length > 20 ? guild.name.slice(0, 20)+'...' : guild.name;
        
        if (this.member.displayName !== this.member.user.username) {
            this.aun = this.member.displayName.length >= 16 ? '@'+this.member.displayName.slice(0, 16)+'...' : '@'+this.member.displayName;
        } else {
            this.aun = this.member.user.tag;
        }
        
        const embed = this;
        
        if (this.colour === 'main') {
            embed.setColor('cc0ffc');
        } else if (this.colour === 'error') {
            embed.setColor('f22b35');
        }

        embed.setAuthor(`${this.gn} | ${title}`, this.guild.iconURL({dynamic: true})?.toString())
             .setDescription(this.description)
             .setFooter(`${this.aun} | ${moment(Date.now()).format('MMM Do YYYY [on] dddd [at] hh:mm A')}`);

        return embed;
    }
};