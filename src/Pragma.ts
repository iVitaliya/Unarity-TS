// Packages
import {config} from 'dotenv';
import {VultrexDB} from 'vultrex.db';

// Files
import {PragmaClient} from './Lib/index';

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

// Client
const client = new PragmaClient();

// Connections
mainDB.connect().then(async () => {
    await ecoDB.connect();

    client.prefix = new Object();
    client.prefix['default'] = 'p!';

    client.language = new Object();
    client.language['default'] = 'english';

    client.economy = ecoDB;
    client.database = mainDB;

    client.connect();
});