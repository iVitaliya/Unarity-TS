import {Event} from "../../lib";

export default class extends Event {
    constructor() {
        super("bot-error");
    }

    run(error: Error) {
        console.log(error.message)
    }
}
