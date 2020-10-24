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

            case "german":
                return language.german;

            case "french":
                return language.french;

            case "spanish":
                return language.spanish;

            case "russian":
                return language.russian;
        }
    }
};

// Exports
export {Languager};