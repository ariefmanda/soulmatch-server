const jwt = require('jsonwebtoken')

    function isLogin(req, res, next){
        let decode = jwt.verify(req.headers.token, 'ibadwjfid')
        if(decode){
            req.user = decode
            console.log(`ini dari middleware`, req.user._id);
            next()
        }else{
            res.json(err)
        }
    }

    function isMe(req,res,next){
        if(req.params.id==req.user.id){
            next()
        }else{
            next()
        }
    }

module.exports = {
    isLogin,
    isMe
}