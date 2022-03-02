// alert('working')

function formValidate(inputText){
    var mailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (inputText.value.match(mailFormat)){
       alert("You've entered a valid email address");
       document.myForm.Email.focus();
       return true;
    }else if(inputText.value === '') {
    alert('This Field cannot be empty')
    }
    else{
        alert('Please enter a valid Email Address!');
        document.myForm.Email.focus();
        return false;
    }
}