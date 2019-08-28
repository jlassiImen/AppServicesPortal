var jwt = require('jwt-simple');

module.exports = function (req, res, next) {

// skip the token outh for [OPTIONS] requests.
    if (req.method == 'OPTIONS') next();
   
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['authorization'];

  //  process.stdout.write("   ttttttttttttt       "+token);
    if (token) {
       try {
            var decoded = jwt.decode(token, require('./secret.js')());
        //  process.stdout.write('ddddddddddddddddddddddddddddddddd  '+decoded.exp+"   nnnnnnnnn"+Date.now());
           var now= Date.now();
           var expirationDate=decoded.exp;

           if (expirationDate <= now) {
                res.status(400);
                res.json({
                    "status": 400,
                    "message": "Token Expired"
                });
                return;
            }
            next();
        } catch (err) {
           log.error('Anexpected error:', err);
                       res.status(500);
            res.json({
                "status": 500,
                "message": "Oops something went wrong",
                "error": err
            });
        }
    } else {

        if ( req.url.indexOf('/api/v1/registerUser') >= 0 || req.url.indexOf('/api/v1/authenticate') >= 0) {
            next(); // To move to next middleware
        }
        else{
            res.status(401);
            res.json({
                "status": 401,
                "message": "Invalid Token"
            });
            return;
        }
    }
};