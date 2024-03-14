const express = require('express');
const router = require('./register');
const app = express();
const jwtauth = require('../middelware/jwtauth');
router.get('http://localhost:3000/classroom',jwtauth, (req, res) => {
    res.send(req.user);
});
module.exports = router;