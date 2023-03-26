const { start } = require("./starter");

function botModulesInitializer(bot) {
    bot.onText(/\/start/, (msg) => start(bot, msg))
}

module.exports = botModulesInitializer