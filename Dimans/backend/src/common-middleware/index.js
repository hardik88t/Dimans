const e = require('express');
const jwt = require('jsonwebtoken');
exports.requireSignin = (req, res, next) => {

    if (req.body.role === 'admin') {
        console.log('VerifiedAdmin');
    }
    else {
        if (req.headers.authorization) {
            const token = req.headers.authorization;
            const user = jwt.verify(token, process.env.JWT_SECRET);
            req.user = user;
            // console.log("token : ", token);
            // console.log("user : ", user);
        } else {
            // return res.status(400).send('<script>alert("Hello")</script>')
            // console.log("No token");
            return res.status(400).json({ message: 'Authorization required' });
        }
    }
    next();

    // jwt.decode()
}

