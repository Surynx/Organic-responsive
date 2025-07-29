//username
let username=document.getElementById("username")
//mail
let email=document.getElementById("Email")
let regex_mail=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/

function validation()
{
    let flag=true
    if(username.value.trim()=="")
    {
        alert("⚠️ Please Enter the Name")
        flag=false
    }
    else if(username.value.trim().length<=2)
    {
        alert("⚠️Username must have atleast 3 characters")
        flag=false
    }
    else if(!regex_mail.test(email.value.trim()))
    {
        alert("⚠️Invalid Mail Address")
        flag=false
    }
    return flag
}

