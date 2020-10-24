// Packages
import {Client, Collection} from 'eris';

// Files
import {} from '../index';

// Class
class KichiChanClient extends Client {
    public db: any;
    public prefix: any;
    
    
    constructor() {
        super(process.env.DISCORD ? process.env.DISCORD : "NzU4MDYxNTM4OTYyNTcxMzY1.X2pd0g.1MA4MMzf3QUAeZ-VTNER7BpRdJg", {
            autoreconnect: true,
            messageLimit: 500,
            defaultImageFormat: 'png',
            defaultImageSize: 512,
            reconnectAttempts: 3,
        });


    }
}; 