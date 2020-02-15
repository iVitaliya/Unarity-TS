import {Command} from "../../lib";
// @ts-ignore
import beautify from "beautify";
import {inspect} from "util";
import {Message} from "discord.js";
import fetch from "node-fetch";

const binPost = async (input: any) => `https://hasteb.in/${(await (await fetch("https://hasteb.in/documents", {
    method: "POST",
    // @ts-ignore
    body: input
})).json()).key}`;
//@ts-ignore
const format = (x: string) => `\`\`\`js\n${x}\`\`\``;

export default class extends Command {
    constructor() {
        super('eval');
    }

    async run(message: Message, args: string[]) {

        if (!["464499620093886486", "671374842951630858"].includes(message.author.id))
            return message.sm('This command is for developers only!', {type: 'error'});

        if (!args[0])
            return message.sm('You need to specify a code to execute!', {type: 'error'});

        let evaluation = args.join(' ');
        const embed = message.embed();
        const input =
            evaluation.length > 1000
                ? await binPost(evaluation)
                : format(evaluation);

        embed
            .setTitle('Evaluation : Success')
            .addField('Input', input);

        try {
            const start = process.hrtime();
            if (evaluation.includes('await'))
                evaluation = `(async () => { ${evaluation} })()`;

            const _ = await eval(evaluation);
            const diff = process.hrtime(start);
            const type = typeof _;
            const time = diff[0] > 0 ? `${diff[0]}s` : `${diff[1] / 1000000}ms`;
            let output = beautify(inspect(_, {depth: 0}), {
                format: 'js'
            });

            output = output.length > 1000 ? await binPost(output) : format(output);

            embed
                .setColor('ff0000')
                .addField('Output', output)
                .addField('Extra Info', `**Time** ${time}\n**Type** ${type}`);
        } catch (e) {

            embed
                .setTitle('Evaluation : Error')
                .setColor('bc0000')
                .addField('Error', `${e}`, false)
                .addField('Extra Info', '**Type** Error');
        }

        message.channel.send(embed);

    }
}