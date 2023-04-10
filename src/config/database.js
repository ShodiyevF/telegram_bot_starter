const { uniqRow } = require('../lib/pg.js');

async function checkDatabase() {
    const datas = await uniqRow('select * from users;');
    if (!datas) {
        console.log('PLEASE CHECK YOUR DATABASE ❗️');
    } else if (!datas.rows.length) {
        console.log('DATABASE ✅');
    }
}

module.exports = checkDatabase;
