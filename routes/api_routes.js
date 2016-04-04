var express = require("express"),
    router  = new express.Router();

module.exports = router;

// Require controllers
var usersController = require("../controllers/users");
var articlesController = require("../controllers/articles");

// Require token authentication
var token = require("../config/token_auth");

// user resource paths:
router.post('/users',    usersCtrl.create);
router.get( '/users/me', token.authenticate, usersCtrl.me);
router.put( '/users/me', token.authenticate, usersCtrl.update);

router.post('/token', token.create);
router.post('/users/me/token', token.authenticate, token.refresh);


// article resource paths
router.post("/articles", articlesController.scrape);

