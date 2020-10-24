// Packages
import {config} from 'dotenv';
import {VultrexDB} from 'vultrex.db';

// Config
config({path: `${__dirname}/../.env`});

// Databases
/* Main */
const mainDB = new VultrexDB({
    provider: 'sqlite',
    fileName: 'pragma-default',
    table: 'default'
});

/* Economy */
const ecoDB = new VultrexDB({
    provider: 'sqlite',
    fileName: 'pragma-eco',
    table: 'economy'
});

mainDB.connect().then(() => {
    ecoDB.connect().then(async () => {
        
    });
});