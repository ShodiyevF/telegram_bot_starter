function start(bot, msg) {
    const chatID = msg.chat.id
    bot.sendMessage(chatID, 'welcome !')
}

module.exports = {
    start
}