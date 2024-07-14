const myForm  = document.getElementById("myForm");
const fname  = document.getElementById("fullName");
const bDate  = document.getElementById("bDate");
const mail  = document.getElementById("mail");
const ins  = document.getElementById("ins");
const terms  = document.getElementById("terms");

function notNull(str){
    return str.trim().length > 0;
}

function isChecked(check){
    return check.checked
}

myForm.addEventListener("submit",function(e){
    if(! notNull(fname.value)){
        alert("You Must Write Your Full Name");
    }
    if(! notNull(bDate.value)){
        alert("You Must Write Your Birth Date");
    }
    if(! notNull(mail.value)){
        alert("You Must Write Email Address");
    }
    if(! notNull(ins.value)){
        alert("You Must Write Your Insurance");
    }
    if(!isChecked(terms)){
        alert("You Must Agree To The Terms Of Policy");
    }
    e.preventDefault();
})
