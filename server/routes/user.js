const userCtrl = require('./../controllers/user.ctrl');

module.exports = router => {
  // get a user
  router.route('/user/:id').get(userCtrl.getUser);

  // get a user profile
  router.route('/user/profile/:id').get(userCtrl.getUserProfile);

  // adds a user
  router.route('/user').post(userCtrl.addUser);

  // follow a user
  router.route('/user/follow').post(userCtrl.followUser);
};
