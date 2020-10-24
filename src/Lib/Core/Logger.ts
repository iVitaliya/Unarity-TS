// Files
import {Datifier as datifier, Colorizer as colorizer} from '../index';

// Constants
const Datifier = new datifier();
const Colorizer = new colorizer();

// Class
class Logger {
    /**
     * @description Create a custom logger to send messages to console with a custom type and time.
     * @param time - The time to use in the logger.
     * @param format - The format to use for the time in the logger.
     * @param type - The type to use for the logger.
     * @param msg - The message to send to console.
     */
    custom(time: number, type: string, msg: string) {
        return console.log(
            Colorizer.custom(`[Pragma | ${type}] (${Datifier.terminal(time)}): ${msg}`)
        );
    }

    /**
     * @description Create a info logger to send information messages to console.
     * @param msg - The message to send to console.
     */
    info(msg: string) {
        return console.log(
            Colorizer.info(`[Pragma | Info] (${Datifier.terminal(Date.now())}): ${msg}`)
        );
    }

    /**
     * @description Create a debug logger to send debug messages to console.
     * @param msg - The message to send to console.
     */
    debug(msg: string) {
        return console.log(
            Colorizer.debug(`[Pragma | Debug] (${Datifier.terminal(Date.now())}): ${msg}`)
        );
    }

    /**
     * @description Create a warning logger to send warning messages to console.
     * @param msg - The message to send to console.
     */
    warn(msg: string) {
        return console.log(
            Colorizer.warn(`[Pragma | Warning] (${Datifier.terminal(Date.now())}): ${msg}`)
        );
    }

    /**
     * @description Create a error logger to send error messages to console.
     * @param msg - The message to send to console.
     */
    error(msg: string) {
        return console.log(
            Colorizer.error(`[Pragma | Error] (${Datifier.terminal(Date.now())}): ${msg}`)
        );
    }
};

// Exports
export {Logger};