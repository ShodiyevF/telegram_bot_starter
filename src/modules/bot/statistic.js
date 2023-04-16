const { uniqRow } = require("../../lib/pg")

const statistic = async (bot, msg) => {
    try {
        const id = msg.chat.id
        const users = (await uniqRow('select * from users')).rows
        const count_inlines = (await uniqRow('select * from count_inlines')).rows
        
        let text = `📊 STATISTIKA\n\n👥 Barcha obunachilar soni: <b>${users.length}</b> ta\n\n\🔷 Foydalanilgan animatsiyalar`
        for (const count of count_inlines) {
            text += `\n\n${count.menu_title}: <b>${count.count_menu}</b> ta`
        }
        
        bot.sendMessage(id, text, {
            parse_mode: 'HTML'
        })
    } catch (error) {
        console.log(error.message, 'statistic');
    }
}

module.exports = {
    statistic
}