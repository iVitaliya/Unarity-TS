// Packages
import chalk from 'chalk';

// Class
class Colorizer {
    /**
     * @description The color that is used for the custom logger.
     * @param msg - The message to colorize.
     */
    custom(msg: string) {
        return chalk.bgBlue(chalk.white(msg));
    }

    /**
     * @description The color that is used for the info logger.
     * @param msg - The message to colorize.
     */
    info(msg: string) {
        return chalk.bgGreen(chalk.white(msg));
    }

    /**
     * @description The color that is used for the debug logger.
     * @param msg - The message to colorize.
     */
    debug(msg: string) {
        return chalk.bgYellowBright(chalk.white(msg));
    }

    /**
     * @description The color that is used for the warning logger.
     * @param msg - The message to colorize.
     */
    warn(msg: string) {
        return chalk.bgYellow(chalk.white(msg));
    }

    /**
     * @description The color that is used for the error logger.
     * @param msg - The message to colorize.
     */
    error(msg: string) {
        return chalk.bgRed(chalk.white(msg));
    }
};

// Exports
export {Colorizer};