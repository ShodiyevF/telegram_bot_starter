async function start(bot, msg) {
    const id = msg.chat.id
    
    const contactKeyboardTwo = {
        parse_mode: "html",
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: `Chatlarga jo'natish`, switch_inline_query: 'bittasini tanlang' }]
            ]
        })
    };
    
    if(id == 570377792){
        const opt = {
            parse_mode: 'HTML',
            reply_markup: JSON.stringify({
                keyboard: [
                    ['Habar jo`natish']
                ],
                resize_keyboard: true
            })
        }
        bot.sendMessage(id, 'Assalomu alaykum, <b>boss</b> yaxshimisiz 😊', opt)
    } else {
        bot.sendMessage(id, `siz bu bot bilan do'stlaringizni hayron qoldirishingiz mumkin, Bot inline hol da ishlaydi!`, contactKeyboardTwo)
    }
}

module.exports = {
    start,
};
