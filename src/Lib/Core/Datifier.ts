// Packages
import moment from 'moment';

// Class
class Datifier {
    /**
     * @description Format the time that you specify with the property to human readable time.
     * @param time - The time to format.
     * @example
     * new this.client.datifier().terminal(<TIME>);
     */
    terminal(time: number) {
        return moment(time).format('dddd [at] hh:mm A');
    }

    /**
     * @description Format the time that you specify with the property to human readable time.
     * @param time - The time to format.
     * @example
     * new this.client.datifier().discord(<TIME>);
     */
    discord(time: number) {
        return moment(time).format('MMMM Do YYYY [on] dddd [at] hh:mm A');
    }
};

// Exports
export {Datifier};