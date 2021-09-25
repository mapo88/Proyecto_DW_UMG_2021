var express = require('express');
var router = express.Router();

/* GET products listing. */
router.get('/', function(req, res, next) {
    res.send('respond from products GET');
});

router.post('/', function(req, res, next) {
    console.log('username:' + req.body.username);
    console.log('password:' + req.body.password);
    //res.send('respond from products POST');
    res.send(
        {
            code: '000',
            description: 'user logged in'
        }
    );
});

module.exports = router;
