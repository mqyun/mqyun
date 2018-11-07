const router = require('koa-router')()

const initRes = require('../comm/common').initRes;
const changeRes = require('../comm/common').changeRes;

const sentenceModel = require('../lib/models/sentence');

router.prefix('/sentence')

router.get('/', async (ctx, next) => {
  await ctx.render('sentence', {
    title: 'sentence'
  })
})

module.exports = router
