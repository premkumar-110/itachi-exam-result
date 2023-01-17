const regno=["user"]
const password=["00-00-0000"]
document.getElementById("submit-btn").addEventListener("click", login);
function login()
{
    const uname=document.getElementById("regno").value;
    const pass=document.getElementById("dob").value;
    const pos=regno.indexOf(uname);
    if(regno.includes(uname) && pass==password[pos])
    {
        window.location.href="result.html";
        sessionStorage.setItem("Name",uname);
        sessionStorage.setItem("index",pos);
    }
    else{
        alert('Invalid Reg No and DOB ..!!!');
    }

}

