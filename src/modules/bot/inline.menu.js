require('dotenv').config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

const { v4: uuidv4 } = require('uuid');
const { getOneInlineByTitle } = require('../../lib/usefulfunctions');

const inline_menu = async (bot, msg) => {
    try {

        const reverse = {
            id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'reverse'}`,
            type: 'article',
            title: 'Almashtirish 🔄',
            input_message_content: {
                message_text: (await msg.query) ? (await msg.query) : 'error'
            },
            description: 'birinchi text yozib keyin shuni ustiga bosing',
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                ]
            },
            thumb_url: `http://${process.env.DOMAIN}/api/inlinemenu/img/${(await getOneInlineByTitle('messi vs ronaldo')).menu_img}`
        }
        console.log(await getOneInlineByTitle('messi vs ronaldo'));
        const menu_list = []
        menu_list.push(reverse)
         //     console.log(inline);
        //     inline.id = `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'reverse'}`
        //     inline.type = inline.menu_type
        //     inline.title = inline.menu_title
        //     inline.input_message_content = inline.menu_title
        // }

        bot.answerInlineQuery(msg.id, menu_list, {cache_time: 0})
    } catch (error) {
        console.log(error.message, 'inlinequery');
    }
}

module.exports = {
    inline_menu
}