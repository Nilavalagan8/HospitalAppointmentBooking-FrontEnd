exports.viewHome = (req,res)=>{
    res.render("home");
    // res.render("hi");
 };

 exports.viewServices = (req,res)=>{
    res.render("services");
 };

 exports.viewAbout = (req,res)=>{
    res.render("about");
 };

 exports.viewDocter = (req,res)=>{
    res.render("docters");
 };

 exports.viewBook = (req,res)=>{
    res.render("bookslot");
 };

 exports.login = (req,res) =>{
   res.render("login");
 }
 exports.sign = (req,res)=>{
   res.render("signin");
 }