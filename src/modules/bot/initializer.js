const { inline_menu } = require('./inline.menu');
const { statistic } = require('./statistic');
const { uniqRow } = require('../../lib/pg');
const { start } = require('./starter');

function botModulesInitializer(bot) {
    bot.on('message', async msg => {
        const chatID = msg.chat.id;
        const user = await uniqRow('select * from users where user_chatid = $1', chatID);
        if (!user.rows.length) {
            const query = 'insert into users (user_chatid, user_username, user_firstname) values ($1,$2,$3)';
            await uniqRow(query, msg.chat.id, msg.chat.username, msg.chat.first_name);
        } else {
            const query = 'update users set user_username = $1, user_firstname = $2, user_lastname = $3 where user_id = $4';
            await uniqRow(query, msg.chat.username, msg.chat.first_name, msg.chat.last_name ? msg.chat.last_name : null, user.rows[0].user_id);
        }
    });

    bot.onText(/\/statistic/, msg => statistic(bot, msg));
    bot.onText(/\/start/, msg => start(bot, msg));
    bot.on('inline_query', msg => inline_menu(bot, msg))

}

module.exports = botModulesInitializer;
