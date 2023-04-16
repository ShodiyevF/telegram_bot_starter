const { uniqRow } = require('./pg.js');

async function getOneInlineByTitle(title) {
    const inlines = (await uniqRow('select * from inlinemenu where menu_title = $1', title)).rows[0]
    return inlines
}

module.exports = {
    getOneInlineByTitle
}