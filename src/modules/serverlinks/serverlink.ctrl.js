const path = require('path')

async function inlineImgCtrl(req, res) {
    const { file_name } = req.params
    res.status(200).sendFile(path.join(__dirname, `../../files/${file_name}`))
}

module.exports = {
    inlineImgCtrl
}