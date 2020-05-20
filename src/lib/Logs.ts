// Packages...
import moment from 'moment';

// Exportation
export const Logger = {
    info(msg: string) {
        return console.log(`[UNARITY | INFO] (${moment(Date.now()).format('dddd, hh:mm A')}): ${msg}`);
    },

    debug(msg: string) {
        return console.log(`[UNARITY | DEBUG] (${moment(Date.now()).format('dddd, hh:mm A')}): ${msg}`);
    },

    warn(msg: string) {
        return console.log(`[UNARITY | WARN] (${moment(Date.now()).format('dddd, hh:mm A')}): ${msg}`);
    },

    error(msg: string) {
        return console.log(`[UNARITY | ERROR] (${moment(Date.now()).format('dddd, hh:mm A')}): ${msg}`);
    }
}