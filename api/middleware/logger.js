var logger = (req,res,next) => {
    console.log(req.url);
    console.log(req.method);
    var d = new Date();
    console.log(d);
    next();
}
module.exports =logger;