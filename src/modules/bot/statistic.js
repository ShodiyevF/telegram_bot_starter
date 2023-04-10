const statistic = async (bot, msg) => {
    try {
        const id = msg.chat.id
        const users = await uniqRow('select * from users')
        const usedinlines = await uniqRow('select * from usedinlines')
        
        bot.sendMessage(id, `active chats: ${users.rows.length}\nused inlines: ${usedinlines.rows[0].used_count}`)
    } catch (error) {
        console.log(error.message, 'statistic');
    }
}

module.exports = {
    statistic
}