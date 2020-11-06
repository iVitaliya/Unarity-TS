// Packages
import {VultrexDB} from 'vultrex.db';
import {config} from 'dotenv';

// Files
import {KichiChanClient} from './Lib/index';

// Configuration
config({path: `${__dirname}/../.env`});

// Database
const db = new VultrexDB({
    provider: 'sqlite',
    fileName: 'kichi-chan',
    table: 'main'
});

// Client
const client = new KichiChanClient();

db.connect().then(async () => {
    client.prefix = new Object();
    client.prefix['default'] = 'k!';

    client.blacklist_users = await db.get(`blacklist-users`, []);
    client.ignored_channels = await db.get(`ignored-channels`, []);
    client.blacklist_guilds = await db.get(`blacklist-guilds`, []);
    client.requiredRoles = await db.get(`required-roles`, []);
    client.disabled = await db.get('disabled-cmds', []);
    
    client.db = db;
});