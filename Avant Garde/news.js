//// Navigation bar////
const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
    console.log("clicked");
})


//////Sign up form/////
// https://www.codinglabweb.com/2022/12/create-registration-form-html-css.html
function registration()
{
    var status= false;

    var name_input = document.getElementById("name_input").value;
    var name_input_obj = document.getElementById("name_input");

    var phone_input = document.getElementById("phone_input").value;
    var email_input = document.getElementById("email_input").value;
    var phone_input = document.getElementById("date_input").value;

    if( name_input !="" && phone_input != "" && email_input !="" && date_input !="")
    {
        status = true;
    }
    if(name_input.indexOf("")== -1)
    {
        alert("Name not added");
    }
    if(phone_input.indexOf("")== -1)
    {
        alert("Phone number not added");
    }
    if(email_input.indexOf(".com")== -1)
    {
        alert("Email not valid");
    }
}

    
