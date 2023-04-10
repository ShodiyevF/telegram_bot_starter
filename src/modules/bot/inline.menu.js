const { v4: uuidv4 } = require('uuid');

const inline_menu = async (bot, msg) => {
    try {

        const menu_list = [
            // {
            //     id: `${uuidv4().toString()}|football`,
            //     type: 'article',
            //     title: 'MAKHACHEV vs OLIVEIRA ',
            //     input_message_content: {
            //         message_text: 'MAKHACHEV vs OLIVEIRA'
            //     },
            //     description: 'bosing',
            //     reply_markup: {
            //         inline_keyboard: [
            //             [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            //         ]
            //     },
            //     thumb_url: 'https://telegra.ph/file/2f9aa73fedc36137ac894.png'
            // },
            {
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
                thumb_url: 'https://telegra.ph/file/235673397640db0d56ea0.jpg'
            },{
                id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : `whisper`}`,
                type: 'article',
                title: 'Maxfiy 🔒',
                input_message_content: {
                    message_text: `Maxfiy xabar ${msg.from.first_name ? msg.from.first_name : 'kimdur'} dan\nxabarni o'chish uchun knopkaga bo'sing !`
                },
                description: '@autotype_bot xabar @username',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: `O'chish 🔑`, callback_data: `${msg.query}☰${msg.from.id}`}]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/1ed665f8a0fa6087ac453.png'
            },{
                id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'secret'}`,
                type: 'article',
                title: 'Secret xabar ❔',
                input_message_content: {
                    message_text: `secret xabar junatilmoqda %0`
                },
                description: 'birinchi text yozib keyin shuni ustiga bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/b337b9ac8222f16aef510.png'
            },{
                id: `${uuidv4().toString()}|${(await msg.query.toString().length) === 0 ? '0' : 'insta1'}`,
                type: 'article',
                title: 'Instagram',
                input_message_content: {
                    message_text: (await msg.query) ? (await 'insta: ' + msg.query) : 'error'
                },
                description: 'instagram @username ngizni yozing keying bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/3cb936326579235e8b242.png'
            }, {
                id: `${uuidv4().toString()}|trend3`,
                type: 'article',
                title: 'Uzbek sila 🇺🇿',
                input_message_content: {
                    message_text: `UZBEK`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/a3607013c00184da4c1b4.png'
            }, {
                id: `${uuidv4().toString()}|islamic1`,
                type: 'article',
                title: 'Juma Muborak !',
                input_message_content: {
                    message_text: `🌖🌗🌘🌑🌒🌓🌔\nㅤ𝓙𝓾𝓶𝓪 𝓶𝓾𝓫𝓸𝓻𝓪𝓴\n🌖🌗🌘🌑🌒🌓🌔`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/5c5b545bb6a10d541ef70.png'
            }
            // ,{
            //     id: `${uuidv4().toString()}|trend2`,
            //     type: 'article',
            //     title: 'bonuni yigiti',
            //     input_message_content: {
            //         message_text: `nimaga`
            //     },
            //     description: 'bosing',
            //     reply_markup: {
            //         inline_keyboard: [
            //             [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            //         ]
            //     },
            //     thumb_url: 'https://telegra.ph/file/a3607013c00184da4c1b4.png'
            // }
            ,{
                id: `${uuidv4().toString()}|trend4`,
                type: 'article',
                title: 'Dunyo 🌎',
                input_message_content: {
                    message_text: `dunyo`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/a3607013c00184da4c1b4.png'
            },{
                id: `${uuidv4().toString()}|meme1`,
                type: 'article',
                title: 'I love you',
                input_message_content: {
                    message_text: `🤍🤍🤍🤍🤍🤍🤍🤍🤍`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/7e4ac82ef88d0ed279ef2.png'
            }
            // ,{
            //     id: `${uuidv4().toString()}|trend1`,
            //     type: 'article',
            //     title: 'Rasmga ol',
            //     input_message_content: {
            //         message_text: `rasmga`
            //     },
            //     description: 'bosing',
            //     reply_markup: {
            //         inline_keyboard: [
            //             [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
            //         ]
            //     },
            //     thumb_url: 'https://telegra.ph/file/a3607013c00184da4c1b4.png'
            // }
            ,{
                id: `${uuidv4().toString()}|pubg1`,
                type: 'article',
                title: 'Pubg 🪖',
                input_message_content: {
                    message_text: `G`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/3da8f7270fac1fdd5ff72.jpg'
            }, {
                id: `${uuidv4().toString()}|freefire1`,
                type: 'article',
                title: 'Free fire 🔫',
                input_message_content: {
                    message_text: `free`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: "https://telegra.ph/file/62c7f845bc0f3d0200828.jpg"
            }, {
                id: `${uuidv4().toString()}|telniol1`,
                type: 'article',
                title: 'Telni oling ',
                input_message_content: {
                    message_text: `t`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/50928c591d344b709161d.png'
            }, {
                id: `${uuidv4().toString()}|ok1`,
                type: 'article',
                title: 'Ok',
                input_message_content: {
                    message_text: `O`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/0e9925c549cacc33e0068.png'
            }, {
                id: `${uuidv4().toString()}|suroq`,
                type: 'article',
                title: 'Suroq ❔',
                input_message_content: {
                    message_text: `┈┈███████▄┈`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/4d901b9c6287dfb45dc4b.png'
            }, {
                id: `${uuidv4().toString()}|plus`,
                type: 'article',
                title: 'Plus ➕',
                input_message_content: {
                    message_text: `⬜️⬜️⬜️⬜️⬜️⬜️⬜️`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/09968c282013c41ea7dbd.png'
            }, {
                id: `${uuidv4().toString()}|soat`,
                type: 'article',
                title: 'Soat 🕛',
                input_message_content: {
                    message_text: `🕛 vaqt utyapti`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/af1ba076e72380fe347e4.png'
            }, {
                id: `${uuidv4().toString()}|tohome1`,
                type: 'article',
                title: 'Uyga 🚶🏻',
                input_message_content: {
                    message_text: `🏠ᅠᅠᅠᅠᅠᅠ🚶🏻🏢`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/8764b34a7d17f20073bcc.png'
            }, {
                id: `${uuidv4().toString()}|tomount1`,
                type: 'article',
                title: 'Dachaga boraylik 😢',
                input_message_content: {
                    message_text: `🚐ᅠᅠᅠᅠᅠᅠ👬👬👬🏘`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/c203f663bcd5c8bc384df.png'
            }, {
                id: `${uuidv4().toString()}|police`,
                type: 'article',
                title: 'Police 🖲',
                input_message_content: {
                    message_text: `🔴🔴🔴🔴⬜️⬜️⬜️🔵🔵🔵🔵\n🔴🔴🔴🔴⬜️⬜️⬜️🔵🔵🔵🔵\n🔴🔴🔴🔴⬜️⬜️⬜️🔵🔵🔵🔵`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/38e3b9b4a1f527766fea1.png'
            }, {
                id: `${uuidv4().toString()}|moon1`,
                type: 'article',
                title: 'Moon 🌕',
                input_message_content: {
                    message_text: `🌕ᅠ`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/8c485a3b0d5121181b439.png'
            }, {
                id: `${uuidv4().toString()}|moon2`,
                type: 'article',
                title: 'Moon 🌚',
                input_message_content: {
                    message_text: `🌚`
                },
                description: 'bosing',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: 'takrorlash 🔁', callback_data: 'ggg' }]
                    ]
                },
                thumb_url: 'https://telegra.ph/file/1c194eb3b9b59807c9e65.png'
            }
        ]

        bot.answerInlineQuery(msg.id, menu_list, {
        cache_time: 0
        })
    } catch (error) {
        console.log(error.message, 'inlinequery');
    }
}

module.exports = {
    inline_menu
}