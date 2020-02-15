import {Event, UnarityClient} from "../../lib";

export default class extends Event {
    constructor() {
        super("bot-start");
    }

    run(bot: UnarityClient) {
        console.log(bot.user!.username + " is ready!")
    }
}