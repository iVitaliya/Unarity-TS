// Packages
import {Message} from 'eris';

// Files
import {PragmaClient} from '../index';
import language from '../../../languages.json';

// Class
class Languager {
    client: PragmaClient;
    message: Message;

    constructor(client: PragmaClient, message: Message) {
        this.client = client;
        this.message = message;
    }

    public async getter() {
        const lang = await this.client.language[this.message.guildID!].toString();

        switch (lang) {
            case "english":
                return language.english;

            case "":
                return language.spanish;
        }
    }
};