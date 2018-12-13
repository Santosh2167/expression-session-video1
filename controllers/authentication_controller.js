
function loginForm(req,res){
    res.render("authentication/loginform")

}

function loginVerify(req,res){

}

function make(req,res){

    res.render("authentication/make");

}

function create(req,res){

    res.json(req.body);

}

module.exports = {
    loginForm,
    loginVerify,
    make,
    create
}