let fullname=document.getElementById('name');
let username=document.getElementById('username');
let email=document.getElementById('Email');
let phone=document.getElementById('phone');
let pass=document.getElementById('password');
let conpassword=document.getElementById('confirm-password');
let labelpass=document.getElementById('label-pass');
let labelconpass=document.getElementById('label-conpass');
let notmatch=document.getElementById('not_match');
let match=document.getElementById('match');
let btn=document.getElementById('signup');
function checkValid(){
    if(pass.value===conpassword.value){
        console.log(pass.value,conpassword.value);
        conpassword.style.borderBottom='2px solid green';
        labelconpass.style.color='green';
        match.style.color='green';
        match.style.display='block';
        notmatch.style.display='none';
    }
    else
    {
        notmatch.style.color='red';
        notmatch.style.display='block';
        labelconpass.style.color=' red';
        conpassword.style.borderBottom='2px solid red';
    }
}

let data;
if(localStorage.UserInfo!=null){
    data=JSON.parse(localStorage.UserInfo);
}
else{
    data=[];
}
btn.addEventListener('click',()=>{
    let object={
        fullname:fullname.value,
        username:username.value,
        email:email.value,
        phone:phone.value,
        pass:pass.value,
        conpassword:conpassword.value
    }
     var json=JSON.stringify(object);
    // localStorage.setItem('UserInfo',data);
    localStorage.setItem('UserInfo',json);
})




