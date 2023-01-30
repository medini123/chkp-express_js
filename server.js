const express = require("express");
const path = require("path");
const port = 3000;
const app = express();



app.set("view engine","ejs");
app.use(requestTime);








app.get("/",(req,res)=>{
    res.render("HomePage");
});

const userRouter = require("./routes/route");
app.use("/",userRouter);


var currentdate = new Date();


function requestTime(req, res, next){
    console.log(req.originalUrl,currentdate.getDay());
    if((currentdate.getHours() > 9) && (currentdate.getHours()<17) && (currentdate.getDay() > 0) && (currentdate.getDay() < 6))
   { next();
}else {
    res.render("index");
}
}




app.listen(3000, (err) => {
    if (err) throw err;
    console.log(`visit http://localhost:${3000}`);
  });