const { inlineImgCtrl } = require('./serverlink.ctrl')

const express = require('express').Router()

express.get('/api/inlinemenu/img/:file_name', (req, res) => inlineImgCtrl(req, res))

module.exports = express