module.exports= reqFile = (req, resp, next) =>{
    if(!req.query.age){
        resp.send("Please provide age");
    }else if(req.query.age < 18){
        resp.send("you can't access this page");
    }
    else{

        next();
    }
}