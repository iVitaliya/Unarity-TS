// Packages...
import {readdirSync} from 'fs';

// Files
import {PragmaClient} from '../index';

// Class...
class Handler {
    commands = {
        search(cmd: string) {
            return (new PragmaClient()).commands.get(cmd) || ((new PragmaClient()).commands.get((new PragmaClient()).aliases.get(cmd)!));
        },

        load(dir: string) {
            if (!dir) new (new PragmaClient()).logger().error('Directory not supplied!');

            try {
                new (new PragmaClient()).logger().custom(Date.now(), 'Commands', 'Loading...');

                readdirSync(dir).forEach((category: string) => {
                    readdirSync(`${dir}/${category}`).filter((cmd: string) => cmd.endsWith('.js')).forEach((command) => {
                        try {
                            let cmd = require(`${dir}/${category}/${command}`);
                            cmd = new cmd(new PragmaClient());

                            new PragmaClient().commands.set(cmd.name, cmd);
                            
                            if (cmd.aliases.length) {
                                cmd.aliases.forEach((alias: string) => {
                                    new PragmaClient().aliases.set(alias, cmd.name);
                                });
                            }

                            new (new PragmaClient()).logger().custom(Date.now(), 'Commands', `${command} loaded!`);
                        } catch (err) {
                            new (new PragmaClient()).logger().error(`${command} couldn't be loaded`);
                        }
                    });
                });
            } catch (err) {
                new (new PragmaClient()).logger().error(`${err}`);
            }
        }
    };

    listeners = {
        load(dir: string) {
            if (!dir) new (new PragmaClient()).logger().error('Directory not supplied!');

            try {
                readdirSync(dir).forEach((category: string) => {
                    readdirSync(`${dir}/${category}`).filter((cmd: string) => cmd.endsWith('.js')).forEach((listener) => {
                        try {
                            const listnr = require(`${dir}/${category}/${listener}`);
                            const eName: string = listnr.name ? listnr.name : listener.split('.js')[0];

                            new PragmaClient().on(eName, listnr.bind(null, PragmaClient));
                        } catch (err) {
                            new (new PragmaClient()).logger().error(`${listener} couldn't fire`);
                        }
                    });
                });
            } catch (err) {
                new (new PragmaClient()).logger().error(`${err}`);
            }
        }
    };
};

// Exports...
export {Handler};