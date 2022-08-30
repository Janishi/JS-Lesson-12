let formElement = document.getElementById("registration");

formElement.addEventListener("submit", function(event){
    event.preventDefault();

    let errors = {};

    let form = event.target;

    let username = document.querySelector('[name="username"]').value;
    if(username.length <5 && username == ""){
        errors.username = "username value must be more then 5 charachter and can not be empty"
    }

    let password = document.getElementById('passw').value;
    let password2 = document.getElementById('passw2').value;
    if (password != password2){
        errors.password2 = "Passwords do not match each other";
    } 
    
    if (password.length < 5 && password ==""){
        errors.password = "Password value must be more than 5 character";
    }

    let agree = document.getElementById('egree').checked;
    if(!agree){
        errors.agree = "You must egree our conditions";
    }

    let gender = false;

    form.querySelectorAll('[name="gender"]').forEach(item => {
        if(item.checked){
            gender=true;
        }
        
    });

    if (!gender){
        errors.gender ='Select you Gender';
    }

    form.querySelectorAll('.error-text').forEach (Element => {
        Element.innerHTML = "";
    });

    for (let item in errors){

        let texterror = document.getElementById('error_' + item);
        if (texterror) {
            texterror.textContent=errors[item]; 
        }
    }

    if(Object.keys(errors).length == 0) {
        form.submit ();
    }

});


let passwordShow = document.getElementById('showhide');
let icon = document.getElementById('show-icon');

icon.addEventListener('click', function(){
    if (passwordShow.type == 'password'){
        passwordShow.setAttribute('type', 'text');
        icon.classList.add('fa-eye-slash');
    }else {
        icon.classList.remove('fa-eye-slash');
        passwordShow.setAttribute('type', 'password');

    }
})
