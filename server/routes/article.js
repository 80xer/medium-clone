const articleCtrl = require('./../controllers/article.ctrl');
const multipart = require('connect-multiparty');
const multipartWare = multipart();

module.exports = router => {
  // get all article
  router.route('/articles').get(articleCtrl.getAll);

  // add an article
  router.route('/article').post(multipartWare, articleCtrl.addArticle);

  // clap on an article
  router.route('/article/clap').post(articleCtrl.clapArticle);

  // comment on an article
  router.route('/article/comment').post(articleCtrl.commentArticle);

  // get a particular article to view
  router.route('/article/:id').get(articleCtrl.getArticle);
};
